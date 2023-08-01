import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
  user: process.env.DB_USERNAME || 'utkarshkumar',
  host: 'localhost',
  database: process.env.DB_NAME || 'bookstore_assesment',
  password:process.env.DB_PASSWORD || '',
  port:process.env.DB_PORT || 5432,
});

export default pool;
