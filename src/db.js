const pg = require('pg');
const dotenv = require('dotenv');

const { Pool } = pg;

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
