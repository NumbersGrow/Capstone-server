const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable('festivals', (table) => {
    table.uuid('id').primary();
    table.string('organization').notNullable();
    table.string('description').notNullable();
    table.string('type').notNullable();
    table.string('address').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('festivals');
};
