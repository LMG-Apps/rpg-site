import {
  verifyJwt,
  getTokenFromHeaders,
  TokenPayload,
} from '../helpers/jwt.helper'
import getMessage from '../helpers/message.helper'
import { Request, Response, NextFunction } from 'express'

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const { url: path } = req

  const excludedPaths = [
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/forgot',
    '/auth/reset',
    '/refresh',
    '/tmp',
  ]
  const isExcluded = !!excludedPaths.find((p) => path.startsWith(p))
  if (isExcluded) {
    return next()
  }

  const token = getTokenFromHeaders(req.headers)

  if (!token) {
    const message = getMessage('account.token.invalid')
    return res.status(401).json({ message })
  }

  try {
    const decoded = verifyJwt(token)
    const { id } = decoded as TokenPayload
    req.accountId = id
    next()
  } catch (e) {
    const message = getMessage('account.token.invalid')
    return res.status(401).json({ message })
  }
}

export default checkJwt
