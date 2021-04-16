var fs = require("fs");
const chalk = require("chalk");

const wordExample = (word, callback) => {
  try {
    let rawWordsData = fs.readFileSync("./words.json");
    let words = JSON.parse(rawWordsData);
    typedWord = word;
    if (words[typedWord] != undefined) {
      let example = words[typedWord].examples;
      console.log(chalk.bold.black(`Example: ${chalk.yellow(example)}`));
    } else {
      console.log(chalk.red("Non dictionary case. Please try again!!"));
    }
    callback(null);
  } catch (e) {
    callback(e);
  }
};

module.exports = {
  wordExample,
};
