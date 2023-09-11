const { v4: uuidv4 } = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable('farms', (table) => {
    table.uuid('id').primary();
    table.string('farm_name').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('owner').notNullable();
    table.string('contact_phone').notNullable();
    table.string('website').notNullable();
    table.string('promotion').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('farms');
};
