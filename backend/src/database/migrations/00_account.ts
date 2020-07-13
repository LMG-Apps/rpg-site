import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('Account', table => {
    table.increments('id').primary()
    table.string('user').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('passwordConfirmation').notNullable()
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('Account')
}
