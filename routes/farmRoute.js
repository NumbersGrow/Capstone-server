const router = require("express").Router();
const farmController = require("../controllers/farmController");
const farmProductionController = require("../controllers/farmProductionController");

router
  .route("/")
  .get(farmController.index);

router
  .route("/:id")
//   .delete(warehouseController.deleteWarehouse)
  .get(farmController.singleFarm);
//   .put(warehouseController.updateWarehouse);

router
  .route("/:id/farm_production")
  .get(farmProductionController.farmProduction);

router 
  .route("/")

module.exports = router;