let express = require('express')
let app = express()
let router = express.Router()
let sqlite3 = require('sqlite3').verbose()
let knex = require('./db/connection')

let routes = require('./routes/theme')

router.get('/', function (req, res, next) {
  knex('sorbetFlavors').select()
  // db.cartoons.get()
  .then(function (sorbets) {
    res.json(sorbets)
  })
})

app.listen(3000, function () {
  console.log('Listening on port 3000')
})
