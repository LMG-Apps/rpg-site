import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import SignUpController from './controllers/signUp.controller'
import SignInController from './controllers/signIn.controller'
import ForgotPassword from './controllers/forgotPassword.controller'
import RefreshToken from './controllers/refreshToken.controller'
import StoryDetails from './controllers/storyDetails.controller'
import StoryWrite from './controllers/storyWrite.controller'
import UserProfile from './controllers/userProfile.controller'
import FriendSolicitation from './controllers/friendSolicitation.controller'

import { accountSignIn, accountSignUp, accountPasswordReset } from './validators/account.validators'
import { storyDetailsValidator, storyWriteValidator } from './validators/story.validator'

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

const storyDetails = new StoryDetails()
routes.get('/story', storyDetails.index)
routes.get('/story/:id', storyDetails.show)
routes.put('/story/:id', upload.single('image'), storyDetailsValidator, storyDetails.update)
routes.post('/story', upload.single('image'), storyDetailsValidator, storyDetails.create)
routes.delete('/story/:id', storyDetails.delete)

const storyWrite = new StoryWrite()
routes.put('/story/write/:id', storyWriteValidator, storyWrite.update)

const userProfile = new UserProfile()
routes.put('/user/edit/:username', upload.single('image'), userProfile.update)
routes.get('/user/:username', userProfile.show)

const friendSolicitation = new FriendSolicitation()
routes.get('/add-friend', friendSolicitation.index)
routes.post('/add-friend/:id', friendSolicitation.create)
routes.put('/add-friend/:id', friendSolicitation.update)
routes.delete('/add-friend/:id', friendSolicitation.delete)

export default routes
