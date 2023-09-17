exports.up = function(knex) {
  return knex.schema.table('festivals', function(table) {
    table.string('image').notNullable();  // Replace with appropriate column type for your database
  });
};

exports.down = function(knex) {
  return knex.schema.table('festivals', function(table) {
    table.dropColumn('image');
  });
};