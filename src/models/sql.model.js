const db = require("../config/sql.db");

class Model {
  static insertData(data) {
     const bank=data.bank;
     const bankname=data.bankname;

    const sql =
      "insert into CSV_Files_Data(bank,bankname) values (?, ?)";
    return new Promise((resolve, reject) => {
      db.query(
        sql,
        [bank,bankname],
        async (err, result) => {
          if (!err) {
            return resolve(result);
          } else {
            return reject(err);
          }
        }
      );
    });
  }
}

module.exports = Model;
