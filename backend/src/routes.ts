import express from 'express'
import SignUpController from './controllers/sign-up.controller'
import SignInController from './controllers/sign-in.controller'

import { accountSignIn, accountSignUp } from './validators/account.validators'

const routes = express.Router()

const signUpController = new SignUpController()
routes.post('/auth/sign-up', accountSignUp, signUpController.create)

const signInController = new SignInController()
routes.get('/auth/sign-in', accountSignIn, signInController.index)

export default routes
