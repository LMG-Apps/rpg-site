import Joi from '@hapi/joi'
import { Request, Response, NextFunction } from 'express'
import getValidatorError from '../helpers/validators.helper'

const rules = {
  name: Joi.string()
    .required(),
  description: Joi.string()
    .required(),
  text: Joi.string()
    .max(16777215)
}

const options = { abortEarly: false }

export const storyValidator = (req: Request, res: Response, next: NextFunction) => {
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
