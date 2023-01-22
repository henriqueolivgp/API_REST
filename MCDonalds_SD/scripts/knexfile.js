// Update with your config settings.


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const db = require('../db')

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: db,
      user: docker,
      password: 123456,
      database: docker,
      port: 5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


};
