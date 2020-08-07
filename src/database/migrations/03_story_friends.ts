import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('Story_friends', (table) => {
    table.increments('id').unsigned().primary()

    table
      .integer('friend_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('Account')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    table
      .integer('story_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('Story')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('Story_friends')
}
