// bind argument practice

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}
console.log(multiply(2, 2)) // testing function 

//bind pre-fills the first argument of multiply with 2, creating a new function that always multiplies any input by 2.

const doubleNum = multiply.bind(null, 2) // bind set via variable named doubleNum
console.log(doubleNum(8)) //doubleNum(8) to call or output, this doubles 8, output = 16
