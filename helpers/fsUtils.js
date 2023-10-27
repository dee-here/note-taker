const util = require("util");
const fs = require("fs");

//make fs.readfile func a promise
const readFromFile = util.promisify(fs.readFile);

//write to file using fs.writeFile
const writeToFile = (file, data) =>
  fs.writeFile(file, JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.error(`Error writing to file: ${error.message}`);
    } else {
      console.info(`Data written to ${file}`);
    }
  });

// Read and Update using fs.readFile and fs.writeFile
const readAndUpdate = (newNote, file) => {
  fs.readFile(file, "utf8", (error, data) => {
    if (error) {
      console.error(`Error reading file: ${error.message}`);
    } else {
      const storedNotes = JSON.parse(data);
      storedNotes.push(newNote);
      writeToFile(file, storedNotes);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndUpdate };
