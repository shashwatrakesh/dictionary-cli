var fs = require("fs");
const chalk = require("chalk");

const wordDictionary = (word, callback) => {
  try {
    let rawWordsData = fs.readFileSync("./words.json");
    let words = JSON.parse(rawWordsData);
    typedWord = word;
    if (words[typedWord] != undefined) {
      let finalWord = words[typedWord];
      let definition = finalWord.definition;
      let antonyms = finalWord.antonyms;
      let synonyms = finalWord.synonyms;
      let example = finalWord.examples;

      console.log(chalk.bold.black(`Definition: ${chalk.yellow(definition)}`));

      console.log(chalk.bold.black(`Synonyms:`));
      synonyms.forEach((synonym) => {
        console.log(chalk.bold.yellow(synonym));
      });

      console.log(chalk.bold.black(`Antonyms:`));
      antonyms.forEach((antonym) => {
        console.log(chalk.bold.yellow(antonym));
      });

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
  wordDictionary,
};
