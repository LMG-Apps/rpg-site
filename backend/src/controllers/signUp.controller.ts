import knex from '../database/connection'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { generateJwt, generateRefreshJwt } from '../helpers/jwt.helper'
import getMessage from '../helpers/message.helper'

const saltRounds = 10

class SignUpController {
  async store(req: Request, res: Response) {
    const { username, email, password } = req.body

    const emailExists = await knex('Account').where('email', email).first()

    const userExists = await knex('Account').where('username', username).first()

    if (userExists) {
      const message = getMessage('account.signup.user_exists')
      return res.status(400).json({ message })
    }

    if (emailExists) {
      const message = getMessage('account.signup.email_exists')
      return res.status(400).json({ message })
    }

    const hash = bcrypt.hashSync(password, saltRounds)

    const Account = {
      username,
      email,
      password: hash,
    }

    const trx = await knex.transaction()

    try {
      const insertedIds = await trx('Account').insert(Account)

      const AccountId = insertedIds[0]

      const token = generateJwt({ id: AccountId })
      const refreshToken = generateRefreshJwt({ id: AccountId })

      await trx.commit()

      delete Account.password

      return res.status(201).json({
        message: getMessage('account.signup.success'),
        ...Account,
        token,
        refreshToken,
      })
    } catch (err) {
      await trx.rollback()

      const message = getMessage('unexpected.error')
      return res.status(400).json({
        message,
      })
    }
  }
}

export default SignUpController
