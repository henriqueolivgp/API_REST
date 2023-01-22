/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('ServingSizes', function(table) {
        table.increments('id')
        table.integer('servingsize').primary();
        table.string('item').notNullable();
        table.timestamps(false, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ServingSizes');
};
