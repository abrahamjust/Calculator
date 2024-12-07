let operand1
let operand2
let operator

function addition(a, b) {
    console.log(a+b)
}

function subtraction(a, b) {
    console.log(a-b)
}

function multiplication(a, b) {
    console.log(a*b)
}

function division(a, b) {
    console.log(a/b)
}

function operate(op1, op2, operator) {
    switch(operator) {
        case '+':
            addition(op1, op2)
            break
        case '-':
            subtraction(op1, op2)
            break
        case '*':
            multiplication(op1, op2)
            break
        case '/':
            division(op1, op2)
            break
    }
}

operand1 = 1
operand2 = 2
operator = '+'
operate(operand1, operand2, operator)