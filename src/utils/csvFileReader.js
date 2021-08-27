const json = require("parse-json");
const fs = require("fs");

const fileReader = (path) => {
  return new Promise((resolve, reject) => {
    let data = [];
    const readable = fs.createReadStream(path);
    readable.on("data", (row) => {
      data.push(JSON.parse(row));
    });
    readable.on("end", () => {
      resolve(data);
    });
    readable.on("error", () => {
      reject(err);
    });
  });
};

module.exports = fileReader;
