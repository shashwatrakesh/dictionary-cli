var fs = require("fs");
const chalk = require("chalk");

let answers = [];
let answerId = null;
let rawWordsData ;
let words ;

const makeAQuestion = (callback) => {
  try {
    rawWordsData = fs.readFileSync("./words.json");
    words = JSON.parse(rawWordsData);

    let rawQuestionData = fs.readFileSync("./quesans.json");
    let questions = JSON.parse(rawQuestionData);
    let fetchedQuestionId = Math.floor(Math.random() * 5) + 1;
    let fetchedQuestionType = questions[fetchedQuestionId].type;
    let fetchedQuestion = questions[fetchedQuestionId].question;
    answers = questions[fetchedQuestionId].answer;
    answerId = questions[fetchedQuestionId].wordID;
    console.log(chalk.bold.red(`${fetchedQuestionType}${fetchedQuestion}`));
    callback(null);
  } catch (e) {
    callback(e);
  }
};

const ansCheck = (answer, callback) => {
  try {
    let ansFlag = 0;
    answers.forEach((ans) => {
      if (ans == answer.word) {
        ansFlag = 1;
      }
    });

    if (ansFlag == 1) {
      console.log(chalk.bold.black("Your answer is correct!!"));
    } else {
      console.log(chalk.bold.black.red("Sorry your answer was wrong"));
      console.log(chalk.bold.black.red("The correct answer is:"));
      let fetchedWordId = answerId;
      let fetchedWord = words.ids[fetchedWordId];
      let finalWord = words[fetchedWord];
      let definition = finalWord.definition;
      let antonyms = finalWord.antonyms;
      let synonyms = finalWord.synonyms;
      let example = finalWord.examples;
      answers.forEach((ans) => {
        console.log(chalk.bold.yellow(ans));
      });

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
    }
    callback(null);
  } catch (e) {
    callback(e);
    return[];
  }
};

module.exports = {
  makeAQuestion,
  ansCheck,
};
