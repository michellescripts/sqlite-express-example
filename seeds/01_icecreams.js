
exports.seed = function (knex, Promise) {
  return knex('icecreamFlavors').del()
    .then(function () {
      // Inserts seed entries
      return knex('icecreamFlavors').insert([
        {flavor: 'chocolate', color: 'brown', score: 2 },
        {flavor: 'strawberry balsamic', color: 'pink', score: 5 }
      ])
    })
}
