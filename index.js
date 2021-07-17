// Include packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');
const licenseData = require('./utils/generateMarkdown.js');

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

This project is covered under the ${answers.projLic} license:

${answers.projLicTxt}

## Installation

${answers.projInstall}

## Usage

${answers.projUsage}

## Contribution

${answers.projCont}

## Test Instructions

${answers.projTest}

## Questions

Have questions or need clarification? Please don't hesitate to reach out to me.

* [GitHub Profile](https://github.com/${answers.projGit}) 

* [Email](mailto:${answers.projEmail})
---
@2021 ${answers.projName}
`;

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

            // renderLicenseBadge(answers.projLic);
            // renderLicenseLink(answers.projLic);
            // renderLicenseSection(answers.projLic);

            // if (answers.projLic == 'MIT') {
            //     answers.projLicTxt = licenseMIT;
            //     answers.projLicBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            // }

            // if (answers.projLic == 'Apache') {
            //     answers.projLicTxt = licenseApache;
            //     answers.projLicBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            // }

            // if (answers.projLic == 'GPL') {
            //     answers.projLicTxt = licenseGPL;
            //     answers.projLicBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            // }
          
            // // console.log(answers.projLicTxt);

            fs.writeFile('README.md', generateREADME(answers), (err) =>
            err ? console.log(err) : console.log('Generated readme.md'));
        })
};

init();
