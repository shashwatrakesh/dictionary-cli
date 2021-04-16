var fs = require("fs");
const chalk = require("chalk");

const wordAntonym = (word, callback) => {
  try {
    let rawWordsData = fs.readFileSync("./words.json");
    let words = JSON.parse(rawWordsData);
    typedWord = word;
    if (words[typedWord] != undefined) {
      let antonyms = words[typedWord].antonyms;
      console.log(chalk.bold.black(`Antonyms:`));
      antonyms.forEach((antonym) => {
        console.log(chalk.bold.yellow(antonym));
      });
    } else {
      console.log(chalk.red("Non dictionary case. Please try again!!"));
    }
    callback(null);
    null;
  } catch (e) {
    callback(e);
  }
};

module.exports = {
  wordAntonym,
};
