function factorial(n) {
    // Checking the argument for legitimacy. Factorial is defined for positive integers.
    if (isNaN(n)) {
        console.error("Non-numerical argument not allowed.");
        return NaN; // The special value: Not a Number
    }
    if (n === 0)
        return 1; // 0! = 1
    if (n < 0)
        return undefined; // Factorial of negative numbers is not defined.
    if (n % 1) {
        console.warn(`${n} will be rounded to the closest integer. For non-integers consider using gamma function instead.`);
        n = Math.round(n);
    }
    // The above checks need not be repeated in the recursion, hence defining the actual recursive part separately below.

    // The following line is a function expression to recursively compute the factorial. It uses the arrow syntax introduced in ES6.
    const recursivelyCompute = a => a > 1 ? a * recursivelyCompute(a - 1) : 1; // Note the use of the ternary operator `?`.
    return recursivelyCompute(n);
}

factorial(3); // Returns 6
factorial(3); // Returns 6



function sum() {
    let x = 0;

    for (let i = 0; i < arguments.length; ++i)
        x += arguments[i];

    return x;
}

sum(1, 2); // Returns 3
sum(1, 2, 3); // Returns 6

// As of ES6, using the rest operator.
function sum(...args) {
    return args.reduce((a, b) => a + b);
}

sum(1, 2); // Returns 3
sum(1, 2, 3); // Returns 6