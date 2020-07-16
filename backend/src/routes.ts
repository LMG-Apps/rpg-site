import express from 'express'
import SignUpController from './controllers/signUp.controller'
import SignInController from './controllers/signIn.controller'
import ForgotPassword from './controllers/forgotPassword.controller'

import { accountSignIn, accountSignUp } from './validators/account.validators'

const routes = express.Router()

const signUpController = new SignUpController()
routes.post('/auth/sign-up', accountSignUp, signUpController.create)

const signInController = new SignInController()
routes.get('/auth/sign-in', accountSignIn, signInController.index)

const forgotPassword = new ForgotPassword()
routes.post('/auth/forgot', forgotPassword.create)

export default routes
