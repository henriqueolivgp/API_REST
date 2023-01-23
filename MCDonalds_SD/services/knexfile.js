// Update with your config settings.


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {

  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '1234',
      database: 'docker',
      port: '5432',
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
