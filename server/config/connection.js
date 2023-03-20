const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  process.env.DB_HOST,
    console.log("Connected to the database")
  );

  module.exports = db;