const pool = require("../db/pool");

const journeys = {
  findAll: () =>
    new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query("SELECT * FROM journeys LIMIT 100", (err, result) => {
          connection.release();
          if (err) {
            reject(err);
          }
          resolve(result);
        });
      });
    }),
};

module.exports = journeys;
