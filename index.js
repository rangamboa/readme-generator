// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    // TODO: Create an array of questions for user input
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

                                  

    ])

    .then((answers) => {
        // Use user feedback for... whatever!!
        // const htmlPageContent = generateHTML(answers);

        // fs.writeFile('index.html', htmlPageContent, (err) =>
        //     err ? console.log(err) : console.log('Successfully created index.html!')
        // );
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
