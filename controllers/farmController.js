const knex = require("knex")(require("../knexfile"));
const query = require("express");
// const emailValidator = require("deep-email-validator");
// const farmModel = require("../models/farmModel");

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

// exports.updateWarehouse = async (req, res) => {
//   if (
//     !req.body.warehouse_name ||
//     !req.body.city ||
//     !req.body.address ||
//     !req.body.country ||
//     !req.body.contact_name ||
//     !req.body.contact_position ||
//     !req.body.contact_phone ||
//     !req.body.contact_email
//   ) {
//     return res
//       .status(400)
//       .send(
//         "Please make sure to provide warehouse, city, address, country, contact phone contact name, contact position and contact email fields in a request"
//       );
//   } //empty inputs validation

//   const email = req.body.contact_email; //email validation
//   async function isEmailValid(email) {
//     return emailValidator.validate(email);
//   }
//   const { valid, reason, validators } = await isEmailValid(email);

//   if (!valid)
//     return res.status(400).send({
//       message: "Please provide a valid email address.",
//       reason: validators[reason].reason,
//     });

//   const fullBody = { id: req.params.id, ...req.body };
//   knex("warehouses")
//     .update(req.body)
//     .where({ id: req.params.id })
//     .then(() => {
//       res.status(200).json(fullBody);
//     })
//     .catch((err) =>
//       res.status(400).send(`Error updating Warehouse ${req.params.id} ${err}`)
//     );
// };
