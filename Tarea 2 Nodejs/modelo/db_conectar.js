

  import dotenv from 'dotenv'
import knex from 'knex';

dotenv.config()

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '1610',
        database: 'Colegio'
    }
})


export default db;
