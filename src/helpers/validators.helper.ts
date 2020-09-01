import getMessage from '../helpers/message.helper'
import { ValidationError } from '@hapi/joi'

interface ErrorMessages {
  [key: string]: string
}

const getValidatorError = (error: ValidationError, messagePath: string) => {
  if (!error) {
    return null
  }

  const errorMessages: ErrorMessages = {}
  error.details.map((detail) => {
    const message = detail.message
    const type = detail.type
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const key = detail.context?.key!

    const path = `${messagePath}.${key}.${type}`
    const customPath = getMessage(path)
    errorMessages[key] = customPath || message
  })

  return errorMessages
}

export default getValidatorError
