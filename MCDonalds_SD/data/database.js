const  knex  = require('knex');
const config = require('../config');


module.exports = new knex ({
    client: 'postgres',
    connection: {
    host: 'locahost',
      user: 'postgres',
      password: '1234',
      database: 'docker',
    },
    strictSSL: 'false',
    max: 1
});



    