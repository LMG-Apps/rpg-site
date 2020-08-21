import express from 'express'
import routes from './routes'
import cors from 'cors'
import path from 'path'

import checkJwt from './middleware/jwt.middleware'

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())

app.use(checkJwt)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(routes)

app.listen(PORT, () => {
  console.log(`Server executando na porta ${PORT}`)
})
