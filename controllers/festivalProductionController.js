const knex = require("knex")(require("../knexfile"));
const query = require("express");

exports.index = (_req, res) => {
  knex("festival_production")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving festival production: ${err}`)
    );
};

exports.festivalProduction = (req, res) => {
  knex("festival_production")
    .select()
    .where({ festival_id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .send(
          `Error, unable to find the production of the festival with the id ${req.params.id}`
        );
    });
};
