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

// exports.getSortedInventories = async (sortBy, orderBy) => {
//   try {
//     let query = knex("inventories")
//       .join("warehouses", "inventories.warehouse_id", "warehouses.id")
//       .select(
//         "inventories.item_name",
//         "inventories.category",
//         "warehouses.warehouse_name as warehouse_name"
//       );

//     const inventories = await query;

//     console.log(inventories);

//     return inventories;
//   } catch (err) {
//     throw new Error(`Error retrieving Inventories: ${err}`);
//   }
// };

// exports.getSearchedInventories = async (searchQuery) => {
//   try {
//     const inventories = await knex("inventories")
//       .leftJoin("warehouses", "inventories.warehouse_id", "warehouses.id")
//       .where("inventories.item_name", "like", `%${searchQuery}%`)
//       .orWhere("inventories.category", "like", `%${searchQuery}%`)
//       .orWhere("warehouses.warehouse_name", "like", `%${searchQuery}%`)
//       .select(
//         "inventories.item_name",
//         "inventories.category",
//         "warehouses.warehouse_name"
//       );

//     console.log(inventories);

//     return inventories;
//   } catch (err) {
//     throw new Error(`Error retrieving Inventories: ${err}`);
//   }
// };
