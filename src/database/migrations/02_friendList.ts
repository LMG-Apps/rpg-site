import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('FriendList', (table) => {
    table.increments('id').unsigned().primary()

    table.string('status', 1).notNullable()

    table
      .integer('user1_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('Account')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    table
      .integer('user2_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('Account')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('FriendList')
}
