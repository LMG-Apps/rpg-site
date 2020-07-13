import express from 'express'
import SignUpController from './controllers/sign-up.controller'

const routes = express.Router()

const signUpController = new SignUpController()
routes.post('/auth/sign-up', signUpController.create)

routes.get('/auth/sign-in', (req, res) => {
  const login = {
    email: 'lutilipe02@hotmail.com',
    password: '123'
  }
  res.json(login)
})

export default routes
