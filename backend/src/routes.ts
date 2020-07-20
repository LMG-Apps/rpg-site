import express from 'express'
import SignUpController from './controllers/signUp.controller'
import SignInController from './controllers/signIn.controller'
import ForgotPassword from './controllers/forgotPassword.controller'
import RefreshToken from './controllers/refreshToken.controllers'

import { accountSignIn, accountSignUp, accountPasswordReset } from './validators/account.validators'

const routes = express.Router()

const signUpController = new SignUpController()
routes.post('/auth/sign-up', accountSignUp, signUpController.store)

const signInController = new SignInController()
routes.get('/auth/sign-in', accountSignIn, signInController.index)

const refreshToken = new RefreshToken()
routes.get('/refresh', refreshToken.index)

const forgotPassword = new ForgotPassword()
routes.post('/auth/forgot', forgotPassword.store)
routes.put('/auth/reset', accountPasswordReset, forgotPassword.update)

export default routes
