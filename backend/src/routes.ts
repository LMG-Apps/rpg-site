import express from 'express'
import SignUpController from './controllers/sign-up.controller'
import SignInController from './controllers/sign-in.controller'

const routes = express.Router()

const signUpController = new SignUpController()
routes.post('/auth/sign-up', signUpController.create)

const signInController = new SignInController()
routes.get('/auth/sign-in', signInController.index)

export default routes
