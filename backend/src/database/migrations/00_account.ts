import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('Account', table => {
    table.increments('id').unsigned().primary()
    table.string('username').unique().notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('biography').nullable().defaultTo(null)
    table.string('profileImage').nullable().defaultTo(null)
    table.integer('resetPasswordExpires').nullable().defaultTo(null)
    table.string('resetPasswordToken').nullable().defaultTo(null)
    table.timestamp('createdAt', { precision: 6 }).defaultTo(knex.fn.now(6))
    table.timestamp('updatedAt', { precision: 6 }).defaultTo(knex.fn.now(6))
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('Account')
}
