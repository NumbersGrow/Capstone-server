const knex = require("knex")(require("../knexfile"));

exports.getDefaultFarmProduction = async () => {
  try {
    const farmProduction = await knex("farm_production")
      .leftJoin("farms", "farm_production.farm_id", "farms.id")
      .select(
        "farm_production.id",
        "farm_production.farm_id",
        "farm_production.product",
        "farm_production.category",
        "farms.farm_name"
      );

    console.log(farmProduction);

    return farmProduction;
  } catch (err) {
    throw new Error(`Error retrieving Production: ${err}`);
  }
};
