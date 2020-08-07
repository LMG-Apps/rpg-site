import express from 'express'
import routes from './routes'
import cors from 'cors'
import path from 'path'

import checkJwt from './middleware/jwt.middleware'

const app = express()

app.use(cors())

app.use(checkJwt)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(routes)

app.listen(process.env.PORT || 3333)
