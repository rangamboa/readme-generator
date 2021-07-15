// Include packages needed for this application.
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = (answers) => `
# ${answers.projTitle}

## Table of Contents

## Description

${answers.projDesc}

## Installation Instructions

${answers.projInstall}

## Usage Information

${answers.projUsage}

## Contribution Guidelines

${answers.projCont}

## Test Instructions

${answers.projTest}

## License

This project is covered under the ${answers.projLic} license.

## Questions

Have questions or need clarification? Please don't hesitate to reach out to me.

* [GitHub Profile](https://github.com/${projGit}) 

* [Email](mailto:${projEmail})

`;


inquirer
    // Create an array of questions for user input to build README.md.
                                                                            // const questions = [];
    .prompt([
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
        type: 'checkbox',
        name: 'projLic',
        message: 'Under which license is this project covered?',
        choices: ['MIT', 'Apache', 'GPL'],
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
        // Generate README.md and its sections, using input from user.

        const htmlPageContent = generateHTML(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Generated a README.md file.')
        );
    })

    .catch((error) => {
    
        if (error.isTtyError) {
                                    // Prompt couldn't be rendered in the current environment
        } else {
                                    // Something else went wrong
        }
    });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
