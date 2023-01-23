const Pool = require('pg-pool');

module.exports = new Pool({
    client: 'postgres',
    user: 'postgres',
    password: '1234',
    host: 'localhost',
    port: '5432',
    database: 'docker',
});