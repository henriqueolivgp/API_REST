const knex = require('knex');

const knexFile = require('../services/knexfile');

const options = knexFile;

module.exports = knex(options);