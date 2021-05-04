
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments("user_id");
        table.string("username", 50).notNullable().unique();
        table.string("password").notNullable();
        table.string("email").notNullable().unique();
        table.string("online_tag").notNullable();
        table.timestamps(true, true)
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')   
};
