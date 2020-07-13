import knex from 'knex'

const connection = knex({
  client: 'mysql',
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
  }
})

export default connection
