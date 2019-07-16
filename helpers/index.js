const fs = require("fs");

const errorLog = error => console.log(error);

const readDataFromFile = fileName => JSON.parse(fs.readFileSync(fileName)).data;

const writeDataToFile = (fileName, data) =>
  fs.writeFile(fileName, JSON.stringify({ data }), errorLog);

module.exports = {
  errorLog,
  readDataFromFile,
  writeDataToFile
};
