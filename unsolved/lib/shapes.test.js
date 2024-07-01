const {Triangle, Circle, Square}  = require('./shapes')

test('Triangle', () => {
const shape = new Triangle();
    expect(shape.generateSVG('T', 'white', 'blue')).toContain('<polygon points="150,18 244,182 56, 182" fill="blue" />');
});

test('Circle', () => {
    const shape = new Circle();
    expect(shape.generateSVG('C', 'white', 'red')).toContain('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square', () => {
    const shape = new Square();
    expect(shape.generateSVG('S', 'white', 'green')).toContain('<rect x="100" y="50" width="100" height="100" fill="green" />');
});