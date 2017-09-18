
exports.up = function (knex, Promise) {
  return knex.schema.createTable('icecreamFlavors', function (table) {
    table.string('flavor').notNull()
    table.string('color').notNull()
    table.integer('score')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('icecreamFlavors')
}
