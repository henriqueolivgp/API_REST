// Update with your config settings.


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */


module.exports = {

  development: {
    client: 'postgres',
    connection: {
      user: 'postgres',
      password: '1234',
      database: 'docker',
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
