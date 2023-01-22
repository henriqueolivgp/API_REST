//const config = require('./config');
const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'db',
    user: 'docker',
    password: '123456',
    database: 'docker',
  },
})

//docker compose up --build -d

//docker compose down

//docker exec mcdonalds_sd-server-1 npm run users

//psql -d postgres -h localhost -p 4321 -U postgres
//password=123456

// user 
