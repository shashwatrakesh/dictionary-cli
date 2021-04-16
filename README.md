# dictionary-cli
Command-line dictionary tool .

## Getting started

### Prerequisites

What things you need to install the software and how to install them

- Visual Studio Code [v1.38]

  - This is an [installation guide](https://code.visualstudio.com/docs/setup/setup-overview) for VS code

- Node.js [v10.15.1 & above] / npm [v6.4.1 & above]
  - This is an [download guide](https://nodejs.org/en/) for Node.js & npm

### Installing

A step by step series of examples that tell you how to get a development env running

- Open VS Code Terminal & switch over to dictionary-cli-main directory.

```
cd ${workspaceFolder}/dictionary-cli-main
```

- Run npm installer to download all the required packages

```
npm install
```

- Run npm link to start using the cli commands.

```
npm link
```

### Commands

-List of words can be found in the words.json file.
-List of quesions with their answers can be found in the quesans.json file.

- Word Definitions
```
dict def <word>
```
- Word Synonyms
```
dict syn <word>
```
- Word Antonyms
```
dict ant <word>
```
- Word Examples
```
dict ex <word>
```
- Word Full Dict
```
dict <word>
```
- Word of the Day Full Dict
```
dict
```
- Word Game
```
dict play
```




## Contributers

* **Shashwat Rakesh**
