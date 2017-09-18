// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: '/Users/mbergquist/galvanize/shrike/sqlite/first-test.db'
  }
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

}
