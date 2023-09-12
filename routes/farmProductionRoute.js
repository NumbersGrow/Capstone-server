const router = require("express").Router();
const farmProductionController = require("../controllers/farmProductionController");

router
  .route("/")
  .get(farmProductionController.index);

// router
//   .route("/:id")
//   .delete(warehouseController.deleteWarehouse)
//   .get(farmProductionController.farmProduction);
//   .put(warehouseController.updateWarehouse);

router
  .route("/:id/farm_production")
  .get(farmProductionController.farmProduction);

router 
  .route("/")

module.exports = router;