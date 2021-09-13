// Sum square difference

/*
    The sum of the squares of the first ten natural numbers is,

    1^2 + 2^2 + ... + 10^2 = 385
    The square of the sum of the first ten natural numbers is,

    (1 + 2 + ... + 10)^2 = 552 = 3025
    Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

    Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function sumOfSquares(limit){
    let sum = 0
    for(let i = 1; i <= limit; i++) sum += (i ** 2)
    return sum
}

function squareOfSum(n){
    return ((n * (n + 1)) / 2) ** 2
}

console.log(squareOfSum(100) - sumOfSquares(100))