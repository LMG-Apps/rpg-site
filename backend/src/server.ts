import express from 'express'
import routes from './routes'
import cors from 'cors'

import checkJwt from './middleware/jwt.middleware'

const PORT = 3333
const app = express()

app.use(cors())

app.use(checkJwt)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server executando na porta ${PORT}`)
})
