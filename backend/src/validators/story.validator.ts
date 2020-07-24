import Joi from '@hapi/joi'
import { Request, Response, NextFunction } from 'express'
import getValidatorError from '../helpers/validators.helper'

const rules = {
  name: Joi.string()
    .required()
    .max(100),
  description: Joi.string()
    .max(200),
  text: Joi.string()
    .max(16777215)
}

const options = { abortEarly: false }

export const storyDetailsValidator = (req: Request, res: Response, next: NextFunction) => {
  const { name, description } = req.body

  const schema = Joi.object({
    name: rules.name,
    description: rules.description
  })

  const { error } = schema.validate({ name, description }, options)

  if (error) {
    const messages = getValidatorError(error, 'story')

    return res.status(400).json({ messages })
  }

  next()
}

export const storyWriteValidator = (req: Request, res: Response, next: NextFunction) => {
  const { text } = req.body

  const schema = Joi.object({
    text: rules.text
  })

  const { error } = schema.validate({ text }, options)

  if (error) {
    const messages = getValidatorError(error, 'story')

    return res.status(400).json({ messages })
  }

  next()
}
