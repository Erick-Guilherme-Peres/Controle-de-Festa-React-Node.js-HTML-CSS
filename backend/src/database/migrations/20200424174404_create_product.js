
exports.up = function(knex) {
    return knex.schema.createTable('produtos', function(table){
        table.increments();
        table.string('descricao').notNullable();
        table.decimal('valor', 15, 2);
        table.integer('idbarraca').unsigned();
        table.string('status', 1).notNullable();
        
        table.foreign('idbarraca').references("id").inTable("barracas");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('produtos');
};
