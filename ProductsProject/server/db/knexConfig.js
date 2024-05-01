
const knexLib=require("knex")
const config=require("../knexfile")
const knex = knexLib(config["development"])

module.exports=knex