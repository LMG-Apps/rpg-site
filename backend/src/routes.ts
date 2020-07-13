import express from 'express'

const routes = express.Router()

routes.get('/auth/sign-up', (req, res) => {
  const login = {
    email: 'lutilipe02@hotmail.com',
    password: '123',
    password_confirmation: '123'
  }
  res.json(login)
})

routes.get('/auth/sign-in', (req, res) => {
  const login = {
    email: 'lutilipe02@hotmail.com',
    password: '123'
  }
  res.json(login)
})

export default routes
