import { Request, Response } from 'express'
import knex from '../database/connection'
import getMessage from '../helpers/message.helper'
import { getTokenFromHeaders, generateJwt, verifyRefreshJwt } from '../helpers/jwt.helper'

interface Account {
    id: number;
    username: string;
}

class RefreshToken {
  async index (req: Request, res: Response) {
    const token = getTokenFromHeaders(req.headers)

    const messageInvalidToken = getMessage('account.token.invalid')
    const messageSuccessful = getMessage('account.token.success')

    if (!token) {
      return res.status(401).json({ message: messageInvalidToken })
    }

    try {
      const decoded = verifyRefreshJwt(token)
      const account: Account = await knex('Account')
        .where('id', Object(decoded).id)
        .first()

      if (!account) {
        return res.status(401).json({ message: messageInvalidToken })
      }
      if (Object(decoded).id !== account.id) {
        return res.status(401).json({ message: messageInvalidToken })
      }

      const metadata = {
        token: generateJwt({ id: account.id, username: account.username })
      }

      return res.status(200).json({ message: messageSuccessful, metadata })
    } catch (e) {
      return res.status(401).json({ message: messageInvalidToken })
    }
  }
}

export default RefreshToken
