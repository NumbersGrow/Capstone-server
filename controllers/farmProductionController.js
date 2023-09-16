const knex = require("knex")(require("../knexfile"));
const query = require("express");
// const inventoryModel = require("../models/farmProductionModel");

exports.index = (_req, res) => {
  knex('farm_production')
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

// exports.index = async (req, res) => {
//   const sortBy = req.query.sort_by;
//   let orderBy = req.query.order_by;
//   const searchQuery = req.query.s;

//   try {
//     let inventories;
//     if (sortBy) {
//       if (!orderBy) {
//         orderBy = "asc";
//       }
//       inventories = await inventoryModel.getSortedInventories(sortBy, orderBy);
//       res.status(200).json(inventories);
//     } else if (searchQuery) {
//       inventories = await inventoryModel.getSearchedInventories(searchQuery);
//       res.status(200).json(inventories);
//     } else {
//       inventories = await inventoryModel.getDefaultInventories();
//       res.status(200).json(inventories);
//     }
//   } catch (err) {
//     res.status(400).send(`Error retrieving Inventories ${err}`);
//   }
// };

// exports.deleteInventoryItem = (req, res) => {
//   knex('inventories')
//     .delete()
//     .where({ id: req.params.id })
//     .then(() => {
//       res.status(204).send(`Inventory with id: ${req.params.id} has been deleted`);
//     })
//     .catch((err) =>
//       res.status(400).send(`Error deleting Inventory item ${req.params.id} ${err}`)
//     );
// };
