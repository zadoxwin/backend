import dotenv from 'dotenv';
dotenv.config({ path: '.backend/src/.env'});
import cliente from 'pg';
const { Pool } = cliente;


const pool = new Pool({
  user: process.env.DB_USER ,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE ,
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT,
  ssl:{
    rejectUnauthorized: false
  }
});


pool.connect()
  .then( ()=> console.log('Exitoso') )
  .catch(err => console.error('Error BD', err));

export {
  pool
  
};