const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    "What is your project's title?",
    'Please describe your project: ',
    'Please describe how to install the project: ',
    'Please describe the usage of your project: ',
    'Please describe the contribution guidelines for your project: ',
    'Please describe your test instructions for your project: ',
    'Choose a license for your project: ',
    'Please provide an email for the user to send questions to: '
];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[5],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[6],
            choices: ['MIT', 'GPLv3', 'Apache 2.0', 'none'],
        },
        {
            type: 'input',
            name: 'questions',
            message: questions[7],
        }
    ])
    .then((response) => {

        fs.writeFile('newREADME.md',
        `
# ${response.title}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

---

## Installation

${response.installation}

---

## Usage

${response.usage}

---

## Contribution

${response.contribution}

---

## Tests

${response.tests}

---

## License

${response.license}

---

## Contact 

Please reach out to ${response.questions} if you have any questions.
        `,
      (err) => err ? console.log(err) : console.log('newREADME.md successfully created!')
    );
  });