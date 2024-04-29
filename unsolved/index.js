const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Input your text (up to 3 Characters)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Choose the color of your text'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose your shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose the color of your shape'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        err ? console.log(err) : console.log('successfully created SVG')
    })
};

function init() {
    inquirer.prompt(questions).then(answers => {
       const logoContent = createLogo(answers);
       writeToFile('logo.svg',logoContent);
    });
   };


   init();