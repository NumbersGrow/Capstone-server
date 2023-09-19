const knex = require("knex")(require("../knexfile"));

exports.getDefaultFarms = async () => {
  try {
    const farms = await knex("farms").select(
      "id",
      "farm_name",
      "address",
      "city",
      "owner",
      "contact_phone",
      "website",
      "promotion"
    );

    console.log(farms);

    return farms;
  } catch (err) {
    throw new Error(`Error retrieving farms: ${err}`);
  }
};
