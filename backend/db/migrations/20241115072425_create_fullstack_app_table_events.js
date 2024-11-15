/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("place").notNullable();
    table.timestamp("start").notNullable();
    table.timestamp("end").notNullable();
    table.string("detail");
    table.integer("owner");
    table.foreign("owner").references("id").inTable("users");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("events");
};
