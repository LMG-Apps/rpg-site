import knex from '../database/connection'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { generateJwt, generateRefreshJwt } from '../helpers/jwt.helper'
import getMessage from '../helpers/message.helper'

interface Account {
  id: number
  email: string
  username: string
  password: string
}

const saltRounds = 9

class Login {
  async index(req: Request, res: Response) {
    const { email, password } = req.body

    const data = await knex('Account').where('email', email).distinct().first()

    const Account: Account = data

    const match = Account
      ? bcrypt.compareSync(password, Account.password)
      : null
    if (!match) {
      const message = getMessage('account.signin.invalid')
      return res.status(400).json({ message })
    }

    const token = generateJwt({ id: Account.id })
    const refreshToken = generateRefreshJwt({
      id: Account.id,
    })

    delete Account.password

    return res.status(200).json({
      message: getMessage('account.signin.success'),
      ...Account,
      token,
      refreshToken,
    })
  }
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

export default Login
