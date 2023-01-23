/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Items', function(table) {
        table.increments('id').primary();
        table.string('item').notNullable();
        table.integer('calories').notNullable();
        table.integer('serv_id').unique().unsigned();
        table.foreign('serv_id').references('ServingSizes.serv_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.integer('cat_id').unique().unsigned();
        table.foreign('cat_id').references('categories.cat_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
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
