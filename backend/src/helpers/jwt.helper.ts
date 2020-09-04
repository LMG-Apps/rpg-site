import jwt, { SignOptions } from 'jsonwebtoken'
import { IncomingHttpHeaders } from 'http'

require('dotenv').config()

export interface Session extends SignOptions {
  id: number
  iat?: string
  exp?: string
}

const tokenPrivateKey: string = process.env.JWT_TOKEN_PRIVATE_KEY!
const refreshTokenPrivateKey: string = process.env
  .JWT_REFRESH_TOKEN_PRIVATE_KEY!

const options = {
  expiresIn: '30 minutes',
}

const refreshOptions = {
  expiresIn: '30 days',
}

export const generateJwt = (payload: Session) => {
  return jwt.sign(payload, tokenPrivateKey, options)
}

export const generateRefreshJwt = (payload: Session) => {
  return jwt.sign(payload, refreshTokenPrivateKey, refreshOptions)
}

export const verifyJwt = (token: string) => {
  return jwt.verify(token, tokenPrivateKey)
}

export const verifyRefreshJwt = (token: string) => {
  return jwt.verify(token, refreshTokenPrivateKey)
}

export const getTokenFromHeaders = (headers: IncomingHttpHeaders) => {
  const token = headers.authorization
  return token ? token.slice(7, token.length) : null
}
