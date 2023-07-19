const dotenv = require('dotenv').config();
const express = require('express');
const { createConnection } = require('typeorm');

const app = express()

const PORT = 3000

createConnection({
  type: process.env.DATABASE_TYPE,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
}).then(connection => {

  app.listen(PORT, () => console.log("Server has been started on port " + PORT))
  
}).catch(error => {
  console.log("Database connection error:", error)
});
