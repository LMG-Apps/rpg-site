import express from 'express'
import routes from './routes'
const db = require('./models')

const PORT = 3333
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server executando na porta ${PORT}`)
  })
})
