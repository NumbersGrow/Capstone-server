const knex = require("knex")(require("../knexfile"));

exports.getDefaultFestivalProduction = async () => {
  try {
    const festivalProduction = await knex("festival_production")
      .leftJoin("festivals", "festival_production.festival_id", "festivals.id")
      .select(
        "festival_production.id",
        "festival_production.festival_id",
        "festival_production.product",
        "festival_production.category",
        "festivals.festival_name"
      );

    console.log(festivalProduction);

    return festivalProduction;
  } catch (err) {
    throw new Error(`Error retrieving Festival Production: ${err}`);
  }
};
