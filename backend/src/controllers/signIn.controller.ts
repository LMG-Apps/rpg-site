import knex from '../database/connection'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { generateJwt, generateRefreshJwt } from '../helpers/jwt.helper'
import getMessage from '../helpers/message.helper'

interface Account {
    id: number;
    email: string;
    username: string;
    password: string;
}

class SignInController {
  async index (req: Request, res: Response) {
    const { email, password } = req.body

    const data = await knex('Account')
      .where('email', email)
      .distinct()
      .first()

    const Account: Account = data

    const match = Account ? bcrypt.compareSync(password, Account.password) : null
    if (!match) {
      const message = getMessage('account.signin.invalid')
      return res.status(400).json({ message })
    }

    const token = generateJwt({ id: Account.id, username: Account.username })
    const refreshToken = generateRefreshJwt({ id: Account.id, username: Account.username })

    delete Account.password

    return res.status(200).json({
      message: getMessage('account.signin.success'),
      ...Account,
      token,
      refreshToken
    })
  }
}

export default SignInController
