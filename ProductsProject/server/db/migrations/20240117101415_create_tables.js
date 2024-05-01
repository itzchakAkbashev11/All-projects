/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.string("name");
        table.string("email").unique(true);
        table.string("password")
        table.string("role").defaultTo("user")
    }).createTable("products",table=>{
        table.increments("id").primary();
        table.string("product_name");
        table.integer("amount");
        table.integer("user_id").unsigned().references("id").inTable("users");
        table.boolean("is_taken").defaultTo(false);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("users")
};
