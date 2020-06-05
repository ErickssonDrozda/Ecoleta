import Knex from 'knex';

export async function up(knex: Knex){
    //CREATE TABLE
    return knex.schema.createTable("items", table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('image').notNullable();
    });

}

export async function down(knex: Knex){
    //REVERSE TABLE
    return knex.schema.dropTable('items');
}