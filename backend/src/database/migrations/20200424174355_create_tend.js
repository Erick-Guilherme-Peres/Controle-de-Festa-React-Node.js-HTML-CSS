
exports.up = function(knex) {
    return knex.schema.createTable('barracas', function(table){
        table.increments();
        table.string('descricao').notNullable();
        table.string('cor', 20).notNullable();
        table.string('senha', 20).notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('barracas');
};
