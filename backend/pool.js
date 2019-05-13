const Pool = require ('pg').Pool;
const pool = new Pool({
    user : 'postgres',
    host: '116.203.116.183',
    database: 'react-movie-app',
    password: 'hp',
    port: 5432,
})

module.exports = pool;