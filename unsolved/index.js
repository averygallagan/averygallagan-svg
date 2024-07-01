const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js')


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
        const { text, textColor, shape, shapeColor } = answers;
        let svgContent;

        switch (shape) {
            case 'circle':
                const circle = new Circle();
                svgContent = circle.generateSVG(text, textColor, shapeColor);
                break;
            case 'triangle':
                const triangle = new Triangle();
                svgContent = triangle.generateSVG(text, textColor, shapeColor);
                break;
            case 'square':
                const square = new Square();
                svgContent = square.generateSVG(text, textColor, shapeColor);
                break;
        }

        writeToFile('logo.svg', svgContent);
    });
}


   init();