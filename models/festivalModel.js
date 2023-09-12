const knex = require("knex")(require("../knexfile"));
// const contactInfo = "concat(contact_phone, ' ', contact_email) as contact_info";

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
