const knex = require("knex")(require("../knexfile"));
// const contactInfo = "concat(contact_phone, ' ', contact_email) as contact_info";

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

// exports.getSortedWarehouses = async (sortBy, orderBy) => {
//   try {
//     let query = knex("warehouses");
//     const commonColumns = ["warehouse_name", "address", "contact_name"];
//     const additionalColumns = [knex.raw(contactInfo)];

//     if (sortBy === "contact_info") {
//       query = query.select([...commonColumns, ...additionalColumns]);
//     } else {
//       query = query.select([...commonColumns, ...additionalColumns]);
//     }

//     const warehouses = await query.orderBy(sortBy, orderBy);

//     console.log(warehouses);

//     return warehouses;
//   } catch (err) {
//     throw new Error(`Error retrieving Warehouses: ${err}`);
//   }
// };

// exports.getSearchedWarehouses = async (searchQuery) => {
//   try {
//     const warehouses = await knex("warehouses")
//       .where("warehouse_name", "like", `%${searchQuery}%`)
//       .orWhere("address", "like", `%${searchQuery}%`)
//       .orWhere("contact_name", "like", `%${searchQuery}%`)
//       .orWhere(knex.raw(contactInfo), "like", `%${searchQuery}%`)
//       .select(
//         "warehouse_name",
//         "address",
//         "contact_name",
//         knex.raw(contactInfo)
//       );

//     console.log(warehouses);

//     return warehouses;
//   } catch (err) {
//     throw new Error(`Error retrieving Warehouses: ${err}`);
//   }
// };
