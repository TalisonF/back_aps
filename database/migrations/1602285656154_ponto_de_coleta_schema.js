'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PontoDeColetaSchema extends Schema {
  up () {
    this.create('ponto_de_coletas', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string("nome")
      table.string("lat")
      table.string("long")
      table.timestamps()
    })
  }

  down () {
    this.drop('ponto_de_coletas')
  }
}

module.exports = PontoDeColetaSchema
