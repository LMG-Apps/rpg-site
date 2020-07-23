import Joi from '@hapi/joi'
import { Request, Response, NextFunction } from 'express'
import getValidatorError from '../helpers/validators.helper'

const rules = {
  username: Joi
    .string()
    .alphanum()
    .min(5)
    .max(15)
    .required(),
  email: Joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
    .required(),
  password: Joi
    .string()
    .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
    .required(),
  passwordConfirmation: Joi
    .string()
    .valid(Joi.ref('password'))
    .required(),
  description: Joi
    .string()
    .max(1)
}

const options = { abortEarly: false }

export const accountSignIn = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body

  const schema = Joi.object({
    email: rules.email,
    password: rules.password
  })

  const { error } = schema.validate({ email, password }, options)

  if (error) {
    const messages = getValidatorError(error, 'account.signin')

    return res.status(400).json({ messages })
  }

  next()
}

export const accountSignUp = (req: Request, res: Response, next: NextFunction) => {
  const { username, email, password, passwordConfirmation } = req.body

  const schema = Joi.object({
    username: rules.username,
    email: rules.email,
    password: rules.password,
    passwordConfirmation: rules.passwordConfirmation
  })

  const { error } = schema.validate({ username, email, password, passwordConfirmation }, options)
  if (error) {
    const messages = getValidatorError(error, 'account.signup')

    return res.status(400).json({ messages })
  }

  next()
}

export const accountPasswordReset = (req: Request, res: Response, next: NextFunction) => {
  const { password, passwordConfirmation } = req.body

  const schema = Joi.object({
    password: rules.password,
    passwordConfirmation: rules.passwordConfirmation
  })

  const { error } = schema.validate({ password, passwordConfirmation }, options)
  if (error) {
    const messages = getValidatorError(error, 'account.signup')

    return res.status(400).json({ messages })
  }

  next()
}
