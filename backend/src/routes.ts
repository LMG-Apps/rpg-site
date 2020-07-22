import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import SignUpController from './controllers/signUp.controller'
import SignInController from './controllers/signIn.controller'
import ForgotPassword from './controllers/forgotPassword.controller'
import RefreshToken from './controllers/refreshToken.controller'
import Story from './controllers/story.controller'

import { accountSignIn, accountSignUp, accountPasswordReset } from './validators/account.validators'
import { storyValidator } from './validators/story.validator'

const routes = express.Router()
const upload = multer(multerConfig)

const signUpController = new SignUpController()
routes.post('/auth/sign-up', accountSignUp, signUpController.store)

const signInController = new SignInController()
routes.post('/auth/sign-in', accountSignIn, signInController.index)

const refreshToken = new RefreshToken()
routes.get('/refresh', refreshToken.index)

const forgotPassword = new ForgotPassword()
routes.post('/auth/forgot', forgotPassword.store)
routes.put('/auth/reset', accountPasswordReset, forgotPassword.update)

const story = new Story()
routes.get('/story', story.index)
routes.get('/story/:id', story.show)
routes.put('/story/:id', upload.single('image'), storyValidator, story.update)
routes.post('/story', upload.single('image'), storyValidator, story.create)
routes.delete('/story/:id', story.delete)

export default routes
