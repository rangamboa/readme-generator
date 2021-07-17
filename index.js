// Include packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// This creates the body of the README.md file inside a string.
const generateREADME = (answers) =>
`# ${answers.projTitle}
${answers.projLicBadge}

## Table of Contents
1. [Description](#description)
2. [License](#license)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
5. [Testing](#testing)
6. [Questions](#questions)

## Description

${answers.projDesc}

## License

${answers.projLicTxt}

## Installation

${answers.projInstall}

## Usage

${answers.projUsage}

## Contribution

${answers.projCont}

## Testing

${answers.projTest}

## Questions

Have questions or need clarification? Please don't hesitate to reach out to me via GitHub or email! Thanks for checking out my project.

* [GitHub Profile](https://github.com/${answers.projGit}) 

* [Email](mailto:${answers.projEmail})
---
@2021 ${answers.projName}
`;

// This function initializes the application and launches the inquirer to solicit user input.
const init = () => {

    inquirer
        // Create an array of questions for user input to build README.md.

        .prompt([
        {
            type: 'input',
            name: 'projName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'projTitle',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'projDesc',
            message: 'What is the project description?',
        },
        {
            type: 'input',
            name: 'projInstall',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'projUsage',
            message: 'Please enter any usage information for this project.',
        },
        {
            type: 'input',
            name: 'projCont',
            message: 'Please enter any contribution guidelines for this project.',
        },
        {
            type: 'input',
            name: 'projTest',
            message: 'Please enter any test instructions for this project.',
        },
        {
            type: 'list',
            name: 'projLic',
            message: 'Under which license is this project covered?',
            choices: ['MIT', 'Apache', 'GPL', 'none'],
        },
        {
            type: 'input',
            name: 'projGit',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'projEmail',
            message: 'What is your email address?',
        },
        ])

        .then((answers) => {

            // Calls imported function to handle license badge and language data, as these take up considerable space.
            const data = generateMarkdown(answers.projLic);

            // Assigns returned data from the function to the answers array.
            answers.projLicBadge = data[0];
            answers.projLicTxt = data[1];

            // Inserts user input into the pre-made README.md file and saves it.
            fs.writeFile('README.md', generateREADME(answers), (err) =>
            err ? console.log(err) : console.log('Generated readme.md'));
        })
};

// Calls inquirer upon applicaton launch.
init();
