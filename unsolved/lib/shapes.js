class Circle {
    generateSVG(text, textColor, shapeColor) {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"  >${text}</text>
            </svg>
        `;
    }
};

class Triangle {
    generateSVG(text, textColor, shapeColor) {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,50 100,150 200,150" fill="${shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>
        `;
    }
};

class Square {
    generateSVG(text, textColor, shapeColor) {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="150" y="150" width="100" height="100" fill="${shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>
        `;
    }
}