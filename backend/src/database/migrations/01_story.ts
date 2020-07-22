import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('Story', table => {
    table.increments('id').unsigned().primary()
    table.string('name').notNullable()
    table.string('image').nullable().defaultTo(null)
    table.text('text', 'mediumtext').nullable().defaultTo(null)
    table.string('description').notNullable()
    table.integer('account_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('Account')
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('Story')
}
