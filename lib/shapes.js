// Define a class for each shape
class Shape {
    constructor(color = '#000000') {
        this.color = color;
    }
        setColor(color) {
            this.color = color;
        }
    }
// Define a class for squares, extending the Shape class 
class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const svg = `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/>`
        return svg;
    }
    
}
// Define a class for circles, extending the Shape class 
class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const svg = `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
        return svg;
    }
}
// Define a class for triangles, extending the Shape class 
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        const svg = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
        return svg;
    }
}

// Export the Circle, Square, and Triangle classes
module.exports = {Circle, Square, Triangle}