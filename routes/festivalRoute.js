const router = require("express").Router();
const festivalController = require("../controllers/festivalController");
const festivalProductionController = require("../controllers/festivalProductionController");

router.route("/").get(festivalController.index);

router
  .route("/:id")
  //   .delete(warehouseController.deleteWarehouse)
  .get(festivalController.singleFestival);
//   .put(warehouseController.updateWarehouse);

router
  .route("/:id/festival_production")
  .get(festivalProductionController.festivalProduction);

router.route("/");

module.exports = router;
