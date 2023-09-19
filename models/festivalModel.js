const knex = require("knex")(require("../knexfile"));

exports.getDefaultFestivals = async () => {
  try {
    const festivals = await knex("festivals").select(
      "id",
      "organization",
      "description",
      "availability",
      "type",
      "address"
    );

    console.log(festivals);

    return festivals;
  } catch (err) {
    throw new Error(`Error retrieving festivals: ${err}`);
  }
};
