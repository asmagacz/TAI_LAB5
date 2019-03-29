class Complex {
    private realNumber: number;
    private imaginaryNumber: number;

    constructor(realNumber: number, imaginaryNumber: number) {
        this.realNumber = realNumber;
        this.imaginaryNumber = imaginaryNumber;
    }

    addNumbers(obj: Complex) {
        return new Complex(this.realNumber + obj.realNumber, this.imaginaryNumber + obj.imaginaryNumber)
    }

    subtractNumbers(obj: Complex) {
        return new Complex(this.realNumber - obj.realNumber, this.imaginaryNumber - obj.imaginaryNumber)
    }

    absNumber() {
        return Math.sqrt(Math.pow(this.realNumber, 2) + Math.pow(this.imaginaryNumber, 2));
    }

    toString() {
        return this.realNumber.toString() + " + " + this.imaginaryNumber.toString() + "i";
    }
}

let com1 = new Complex(3, 2);
let com2 = new Complex(5, 4);
console.log(com1.addNumbers(com2));
console.log(com1.subtractNumbers(com2));
console.log(com1.absNumber());
console.log(com1.toString());