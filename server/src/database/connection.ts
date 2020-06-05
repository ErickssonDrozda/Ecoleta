import knex from 'knex';

const connection = knex(
    {
        client: 'mysql',
        version: '5.7',
        connection: {
          host : '127.0.0.1',
          user : 'root',
          password : 'root',
          database : 'nextlevelweek'
        }
    }
);

export default connection;