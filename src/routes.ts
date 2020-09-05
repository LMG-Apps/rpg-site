import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import Login from './controllers/login.controller'
import ForgotPassword from './controllers/forgotPassword.controller'
import RefreshToken from './controllers/refreshToken.controller'
import StoryDetails from './controllers/storyDetails.controller'
import UserProfile from './controllers/userProfile.controller'
import FriendSolicitation from './controllers/friendSolicitation.controller'
import FriendList from './controllers/friendList.controller'

import {
  accountSignIn,
  accountSignUp,
  accountPasswordReset,
} from './validators/account.validators'

import {
  storyDetailsValidator,
  storyWriteValidator,
} from './validators/story.validator'

const routes = express.Router()
const upload = multer(multerConfig)

const login = new Login()
routes.post('/auth/sign-up', accountSignUp, login.store)
routes.post('/auth/sign-in', accountSignIn, login.index)

const refreshToken = new RefreshToken()
routes.get('/refresh', refreshToken.index)

const forgotPassword = new ForgotPassword()
routes.post('/auth/forgot', forgotPassword.store)
routes.put('/auth/reset', accountPasswordReset, forgotPassword.update)

const storyDetails = new StoryDetails()
routes.get('/story', storyDetails.index)
routes.get('/story/:id', storyDetails.show)
routes.put(
  '/story/:id',
  upload.single('image'),
  storyDetailsValidator,
  storyDetails.update
)
routes.post(
  '/story',
  upload.single('image'),
  storyDetailsValidator,
  storyDetails.store
)
routes.delete('/story/:id', storyDetails.delete)
routes.patch('/story/:id/avatar', upload.single('image'), storyDetails.avatar)
routes.patch('/story/:id/write', storyWriteValidator, storyDetails.write)

const userProfile = new UserProfile()
routes.put('/user/edit', userProfile.update)
routes.get('/user/:username', userProfile.show)
routes.patch('/user/edit/avatar', upload.single('image'), userProfile.patch)

const friendSolicitation = new FriendSolicitation()
routes.get('/add-friend', friendSolicitation.index)
routes.post('/add-friend', friendSolicitation.store)
routes.put('/add-friend/:id', friendSolicitation.update)
routes.delete('/add-friend/:id', friendSolicitation.delete)

const friendList = new FriendList()
routes.get('/friend-list', friendList.index)
routes.delete('/friend-list/:id', friendList.delete)

export default routes
