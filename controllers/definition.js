const fs = require("fs");
const chalk = require("chalk");

const wordDefinition = (word, callback) => {
  try {
    let rawWordsData = fs.readFileSync("./words.json");
    let words = JSON.parse(rawWordsData);
    typedWord = word;
    if (words[typedWord] != undefined) {
      let definition = words[typedWord].definition;
      console.log(chalk.bold.black(`Definition: ${chalk.yellow(definition)}`));
    } else {
      console.log(chalk.black.red("Non dictionary case. Please try again!!"));
    }
    callback(null);
  } catch (e) {
    callback(e);
  }
};

module.exports = {
  wordDefinition,
};
