import { verifyJwt, getTokenFromHeaders } from '../helpers/jwt.helper'

import { Request, Response, NextFunction } from 'express'

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const { url: path } = req

  const excludedPaths = ['/auth/sign-in', '/auth/sign-up']
  const isExcluded = !!excludedPaths.find(p => p.startsWith(path))

  if (isExcluded) {
    return next()
  }

  const token = getTokenFromHeaders(req.headers)

  if (!token) {
    return
  }

  console.log(token)
}

export default checkJwt
