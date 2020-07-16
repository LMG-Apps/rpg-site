import knex from '../database/connection'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { generateJwt, generateRefreshJwt } from '../helpers/jwt.helper'
import getMessage from '../helpers/message.helper'

const saltRounds = 10

class SignUpController {
  async create (req: Request, res: Response) {
    const {
      user,
      email,
      password
    } = req.body

    const emailExists = await knex('Account')
      .where('email', email)
      .first()

    const userExists = await knex('Account')
      .where('user', user)
      .first()

    if (userExists) {
      const message = getMessage('account.signup.user_exists')
      return res.status(400).json({ message })
    }

    if (emailExists) {
      const message = getMessage('account.signup.email_exists')
      return res.status(400).json({ message })
    }

    const trx = await knex.transaction()

    const hash = bcrypt.hashSync(password, saltRounds)

    const Account = {
      user,
      email,
      password: hash
    }

    const insertedIds = await trx('Account').insert(Account)

    const AccountId = insertedIds[0]

    const token = generateJwt({ jwtid: String(AccountId) })
    const refreshToken = generateRefreshJwt({ jwtid: String(AccountId) })

    await trx.commit()

    delete Account.password

    return res.status(200).json({
      message: getMessage('account.signup.success'),
      ...Account,
      token,
      refreshToken
    })
  }
}

export default SignUpController
