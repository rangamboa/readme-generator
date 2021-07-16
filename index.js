// Include packages needed for this application.
const fs = require('fs');
const inquirer = require('inquirer');

const licenseMIT = `
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;

const licenseApache = `
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

  [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;

const licenseGPL = `This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.`;

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
@2021
`;

const init = () => {

    inquirer
        // Create an array of questions for user input to build README.md.

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
            type: 'list',
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

            // console.log(answers);

            // let answers.projLicTxt;
            // let answers.projLicBadge;

            if (answers.projLic == 'MIT') {
                answers.projLicTxt = licenseMIT;
                answers.projLicBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            }

            if (answers.projLic == 'Apache') {
                answers.projLicTxt = licenseApache;
                answers.projLicBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            }

            if (answers.projLic == 'GPL') {
                answers.projLicTxt = licenseGPL;
                answers.projLicBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
            }
          
            // console.log(answers.projLicTxt);

            fs.writeFile('README.md', generateREADME(answers), (err) =>
            err ? console.log(err) : console.log('Generated readme.md'));
        })
};

init();
