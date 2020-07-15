import knex from '../database/connection'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { generateJwt, generateRefreshJwt } from '../helpers/jwt.helper'

const saltRounds = 10

class SignUpController {
  async create (req: Request, res: Response) {
    const {
      user,
      email,
      password,
      passwordConfirmation
    } = req.body

    if (password !== passwordConfirmation) {
      return res.json({ message: 'Passwords do not match' })
    }

    const emailExists = await knex('Account')
      .where('email', email)
      .distinct()

    const userExists = await knex('Account')
      .where('user', user)
      .distinct()

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    if (emailExists) {
      return res.status(400).json({ message: 'Email already exists' })
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

    return res.json({
      message: 'Account created',
      ...Account,
      token,
      refreshToken
    })
  }
}

export default SignUpController
