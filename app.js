let express = require('express')
let app = express()

var environment = 'development'
var config = require('./knexfile')[environment]
let knex = require('knex')(config)

app.get('/', function (req, res, next) {
  console.log('get is hits')
  knex('sorbetFlavors').select()
  // db.cartoons.get()
  .then(function (sorbets) {
    res.json(sorbets)
  })
})

app.listen(3000, function () {
  console.log('Listening on port 3000')
})
