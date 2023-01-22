/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Items', function(table) {
        table.increments('id').primary();
        table.string('item').notNullable();
        table.integer('calories').foreign().notNullable();
        table.integer('servingSizes').foreign().notNullable();
        table.timestamps(false, true);
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Items');
};
