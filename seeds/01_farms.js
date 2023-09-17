const farmData = require('../seed_data/farms');
const productionData = require('../seed_data/farm_production');

exports.seed = function (knex) {
  return knex('farms')
    .del()
    .then(function () {
      return knex('farms').insert(farmData);
    })
    .then(() => {
      return knex('farm_production').del();
    })
    .then(() => {
      return knex('farm_production').insert(productionData);
    })
    .catch((error) => {
      console.error('Error seeding data:', error);
    });
};
