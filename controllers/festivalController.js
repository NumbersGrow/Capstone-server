const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("festivals")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving festivals: ${err}`));
};

exports.singleFestival = (req, res) => {
  knex("festivals")
    .select()
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .send(`Error, couldn't find festival with the id of ${req.params.id}`);
    });
};
