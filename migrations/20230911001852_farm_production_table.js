/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('farm_production', (table) => {
      table.uuid('id').primary();
      table
        .uuid('farm_id')
        .references('farms.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('product').notNullable();
      table.string('category').notNullable();
      table.timestamps(true, true);
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('farm_production');
  };
