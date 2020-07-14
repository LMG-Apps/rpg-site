import knex from '../database/connection'
import { Request, Response } from 'express'

class SignInController {
  async index (req: Request, res: Response) {
    const { user, password } = req.body
  }
}

export default SignInController
