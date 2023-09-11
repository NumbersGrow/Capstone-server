const festivalData = require('../seed_data/festivals');
const festivalProductionData = require('../seed_data/festival_production');

exports.seed = function (knex) {
  return knex('festivals')
    .del()
    .then(function () {
      return knex('festivals').insert(festivalData);
    })
    .then(() => {
      return knex('festival_production').del();
    })
    .then(() => {
      return knex('festival_production').insert(festivalProductionData);
    })
    .catch((error) => {
      console.error('Error seeding data:', error);
    });
};