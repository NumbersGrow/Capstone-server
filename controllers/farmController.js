const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  knex("farms")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving farms: ${err}`));
};

exports.singleFarm = (req, res) => {
  knex("farms")
    .select()
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(404)
        .send(`Error, couldn't find farm with the id of ${req.params.id}`);
    });
};
