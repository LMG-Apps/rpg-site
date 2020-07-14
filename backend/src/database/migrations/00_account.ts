import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('Account', table => {
    table.increments('id').unsigned().primary()
    table.string('user').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6))
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('Account')
}
