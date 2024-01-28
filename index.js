class MathOperations {
    static PI = 3.14;

    static add(a, b) {
        return a + b;
}

static subtract(a, b) {
    return a - b;
}
}

// Accessing static property
console.log(MathOperations.PI);

//Using static method to add numbers
console.log(MathOperations.add(4, 2));

//Using static method to subtract numbers
console.log(MathOperations.subtract(8, 9));