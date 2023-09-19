const knex = require("knex")(require("../knexfile"));
const query = require("express");

exports.index = (_req, res) => {
  knex("farm_production")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving farm production: ${err}`)
    );
};

exports.farmProduction = (req, res) => {
  knex("farm_production")
    .select()
    .where({ farm_id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .send(
          `Error, unable to find the production of the farm with the id ${req.params.id}`
        );
    });
};
