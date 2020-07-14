import knex from '../database/connection'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import { generateJwt, generateRefreshJwt } from '../helpers/jwt.helper'

interface Account {
    id: number;
    email: string;
    user: string;
    password: string;
}

class SignInController {
  async index (req: Request, res: Response) {
    const { user, password } = req.body

    const data = await knex('Account')
      .where('user', user)
      .distinct()

    const Account: Account = data[0]

    const match = Account ? bcrypt.compareSync(password, Account.password) : null
    if (!match) {
      return res.status(400).json({ message: 'Incorrect User and Password combination.' })
    }

    const token = generateJwt({ jwtid: String(Account.id) })
    const refreshToken = generateRefreshJwt({ jwtid: String(Account.id) })

    delete Account.password

    return res.status(200).json({
      message: 'Logged In',
      ...Account,
      token,
      refreshToken
    })
  }
}

export default SignInController
