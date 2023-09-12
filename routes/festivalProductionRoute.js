const router = require("express").Router();
const festivalProductionController = require("../controllers/festivalProductionController");

router.route("/").get(festivalProductionController.index);

// router
//   .route("/:id")
//   .delete(warehouseController.deleteWarehouse)
//   .get(farmProductionController.farmProduction);
//   .put(warehouseController.updateWarehouse);

router
  .route("/:id/festival_production")
  .get(festivalProductionController.festivalProduction);

router.route("/");

module.exports = router;
