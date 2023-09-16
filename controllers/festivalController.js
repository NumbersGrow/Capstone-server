const knex = require("knex")(require("../knexfile"));
// const query = require("express");
// const emailValidator = require("deep-email-validator");
// const festivalModel = require("../models/festivalModel");

exports.index = (_req, res) => {
  knex('festivals')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving festivals: ${err}`)
    );
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
// exports.index = async (req, res) => {
//   const sortBy = req.query.sort_by;
//   let orderBy = req.query.order_by;
//   const searchQuery = req.query.s;

//   try {
//     let warehouses;
//     if (sortBy) {
//       if (!orderBy) {
//         orderBy = "asc";
//       }
//       warehouses = await warehouseModel.getSortedWarehouses(sortBy, orderBy);
//       res.status(200).json(warehouses);
//     } else if (searchQuery) {
//       warehouses = await warehouseModel.getSearchedWarehouses(searchQuery);
//       res.status(200).json(warehouses);
//     } else {
//       warehouses = await warehouseModel.getDefaultWarehouses();
//       res.status(200).json(warehouses);
//     }
//   } catch (err) {
//     res.status(400).send(`Error retrieving Warehouses ${err}`);
//   }
// };

// exports.deleteWarehouse = (req, res) => {
//   knex("warehouses")
//     .delete()
//     .where({ id: req.params.id })
//     .then(() => {
//       res
//         .status(204)
//         .send(`Warehouse with id: ${req.params.id} has been deleted`);
//     })
//     .catch((err) =>
//       res.status(400).send(`Error deleting Warehouse ${req.params.id} ${err}`)
//     );
// };
