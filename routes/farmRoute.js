const router = require("express").Router();
const farmController = require("../controllers/farmController");
const farmProductionController = require("../controllers/farmProductionController");

router.route("/").get(farmController.index);

router.route("/:id").get(farmController.singleFarm);

router
  .route("/:id/farm_production")
  .get(farmProductionController.farmProduction);

module.exports = router;
