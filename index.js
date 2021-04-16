#!/usr/bin/env node
const chalk = require('chalk');

const {
    program
} = require('commander');
const {
    prompt
} = require('inquirer');

const {
    wordDefinition
} = require('./controllers/definition');
const {
    wordSynonym
} = require('./controllers/synonyms');
const {
    wordAntonym
} = require('./controllers/antonyms');
const {
    wordExample
} = require('./controllers/examples');
const {
    wordDictionary
} = require('./controllers/fullDictionary');
const {
    fetchRandomWord
} = require('./controllers/wordOfTheDay');
const {
    makeAQuestion,
    ansCheck
} = require('./controllers/wordGame');


try {
    if (process.argv.length == 2) {
        fetchRandomWord((err) => {
            if (err) {
                console.log(chalk.bold.red(err.message));
            }
        });
    } else {
        const question = [{
            type: 'input',
            name: 'word',
            message: 'Input the word'
        }];

        program
            .command('def <word>')
            .action((word) => {
                word = word.toLowerCase();
                wordDefinition(word, (err) => {
                    if (err) {
                        console.log(chalk.bold.red(err.message));
                    }
                });
            })

        program
            .command('syn <word>')
            .action((word) => {
                word = word.toLowerCase();
                wordSynonym(word, (err) => {
                    if (err) {
                        console.log(chalk.bold.red(err.message));
                    }
                });
            })

        program
            .command('ant <word>')
            .action((word) => {
                word = word.toLowerCase();
                wordAntonym(word, (err) => {
                    if (err) {
                        console.log(chalk.bold.red(err.message));
                    }
                });
            })

        program
            .command('ex <word>')
            .action((word) => {
                word = word.toLowerCase();
                wordExample(word, (err) => {
                    if (err) {
                        console.log(chalk.bold.red(err.message));
                    }
                });
            })


        program
            .arguments('<word>')
            .action((word) => {
                word = word.toLowerCase();
                wordDictionary(word, (err) => {
                    if (err) {
                        console.log(chalk.bold.red(err.message));
                    }
                });
            });

        program
            .command('play')
            .action(() => {
                makeAQuestion((err) => {
                    if (err) {
                        console.log(chalk.bold.red(err.message));
                    }else{
                        prompt(question).then(answer => ansCheck(answer, (err) => {
                            if (err) {
                                console.log(chalk.bold.red(err.message));
                            }
                        }));
                    }
                });
               
            });


        program.parse(process.argv);
    }
} catch (e) {
    console.log(chalk.bold.red(e.message))
}