/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('menu',(table) =>{
      table.increments('id');
      table.string('categories').notNullable();
      table.string('item').notNullable();
      table.intiger('ServingSize').notNullable();
    });
  };
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

  exports.down = function(knex) {
    return knex.schema.dropTable('menu');
  };
  