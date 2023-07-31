import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
  user: 'utkarshkumar',
  host: 'localhost',
  database: 'bookstore_assesment',
  password: '',
  port: 5432,
});

export default pool;
