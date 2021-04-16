const fs = require("fs");
const chalk = require("chalk");

const wordSynonym = (word, callback) => {
  try {
    let rawWordsData = fs.readFileSync("./words.json");
    let words = JSON.parse(rawWordsData);

    typedWord = word;
    if (words[typedWord] != undefined) {
      let synonyms = words[typedWord].synonyms;
      console.log(chalk.bold.black(`Synonyms:`));
      synonyms.forEach((synonym) => {
        console.log(chalk.bold.yellow(synonym));
      });
    } else {
      console.log(chalk.red("Non dictionary case. Please try again!!"));
    }
    callback(null);
  } catch (e) {
    callback(e);
  }
};

module.exports = {
  wordSynonym,
};
