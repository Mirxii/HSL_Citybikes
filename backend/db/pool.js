const sql = require("mysql2");

const pool = sql.createPool({
  host: "localhost",
  user: "biker",
  password: "biker",
  database: "citybikes",
});

module.exports = pool;
