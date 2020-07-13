import knex from '../database/connection'
import { Request, Response } from 'express'

class SignUpController {
  async create (req: Request, res: Response) {
    const {
      user,
      email,
      password,
      passwordConfirmation
    } = req.body

    const trx = await knex.transaction()

    const Account = {
      user,
      email,
      password,
      passwordConfirmation
    }

    const insertedIds = await trx('Account').insert(Account)

    const AccountId = insertedIds[0]

    await trx.commit()

    return res.json({
      id: AccountId,
      ...Account
    })
  }
}

export default SignUpController
