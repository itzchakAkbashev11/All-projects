const knex = require("../db/knexConfig")

const userServ = {
    getUserByEmail(email) {
        return knex('users').select('*').where('email', email).first();
    },
    createUser(user) {
        return knex("users").insert(user);
    },
    getUserById(id){
        return knex("users").select("name","email","id","role").where('id', id).first();
    }

}
module.exports = userServ