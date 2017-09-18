
exports.seed = function (knex, Promise) {
  return knex('sorbetFlavors').del()
    .then(function () {
      // Inserts seed entries
      return knex('sorbetFlavors').insert([
        {flavor: 'pineapple', color: 'white', score: 4 },
        {flavor: 'coconut', color: 'white', score: 5 }
      ])
    })
}
