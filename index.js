// Your code here

class Polygon {
    constructor(intArray) {
        this.intArray = intArray
    }
    get countSides () {
        return this.intArray.length
    }
    get perimeter () {
        return this.intArray.reduce((acc, value) => acc + value, 0)
    }
}
class Triangle extends Polygon{
    get isValid () {
        const sorted = [...this.intArray].sort((a, b) => a-b )
        return (sorted[0] + sorted[1]) > sorted[2]

    }
}
class Square extends Polygon {
    get isValid () {
        return this.intArray.length === 4 && this.intArray.every(value => value === this.intArray[0])
    }
    get area () {
        return this.intArray[0] **2
    }
}
const square = new Square([4, 4, 4, 4])

console.log(square.isValid)

const triangle = new Triangle([1, 4, 5])
console.log(triangle.isValid)