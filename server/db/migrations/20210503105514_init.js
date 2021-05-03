exports.up = function(knex) {
    return knex.schema.createTable('matches', table => {
        table.increments("match_id");
        table.string("player", 50).notNullable();
        table.string("opponent", 50).notNullable();
        table.string("winner").notNullable();
        table.string("disconnected");
        table.timestamp("timestamp").defaultTo(knex.fn.now());
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('matches')  
};
