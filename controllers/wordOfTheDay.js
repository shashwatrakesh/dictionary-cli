var fs = require("fs");
const chalk = require("chalk");

const fetchRandomWord = (callback) => {
  try {
    let rawWordsData = fs.readFileSync("./words.json");
    let words = JSON.parse(rawWordsData);
    let fetchedWordId = Math.floor(Math.random() * 5) + 1;
    let fetchedWord = words.ids[fetchedWordId];
    let finalWord = words[fetchedWord];
    let word = finalWord.word;
    let definition = finalWord.definition;
    let antonyms = finalWord.antonyms;
    let synonyms = finalWord.synonyms;
    let example = finalWord.examples;
    console.log(chalk.bold.red("WORD OF THE DAY:"));

    console.log(chalk.bold.black(`Word: ${chalk.yellow(word)}`));

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
    callback(null);
  } catch (e) {
    callback(e);
  }
};

module.exports = {
  fetchRandomWord,
};
