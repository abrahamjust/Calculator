let operand1
let operand2
let operator
let displayNum = '0'
let used = 0

function operate(op1, op2, operator) {
    let ans = 0
    switch(operator) {
        case '+':
            ans = op1 + op2
            operand1 = ans
            displayNum = ans
            setDisplay()
            displayNum = '0'
            break
        case '-':
            ans = op1 - op2
            operand1 = ans
            displayNum = ans
            setDisplay()
            displayNum = '0'
            break
        case '*':
            ans = op1 * op2
            operand1 = ans
            displayNum = ans
            setDisplay()
            displayNum = '0'
            break
        case '/':
            ans = op1 / op2
            operand1 = ans
            displayNum = ans
            setDisplay()
            displayNum = '0'
            break
    }
}

function setDisplay() {
    const disp = document.getElementById("display")
    used = 1
    if(displayNum.length > 9) {
        let numDisp = displayNum.substring(0, 9)
        disp.innerText = numDisp
    } else {
        disp.innerText = displayNum
    }
}

function inputOperand(num) {
    if(displayNum == '0') {
        displayNum = num
    } else if(displayNum.length < 9) {
        displayNum = displayNum + num
    }
    setDisplay()
}

function Operator(op) {
    if(operand1 == null) {
        operand1 = Number(displayNum)
        displayNum = ''
        operator = op
    } else {
        operate(operand1, Number(displayNum), operator)
        operator = op
        console.log(operand1, " ", displayNum, " ", operator)
    }
}

const number = document.getElementsByClassName("Numeric")
for(let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", () => {
        inputOperand(number[i].value)
    })
}

const sign = document.getElementById("sign")
sign.addEventListener("click", () => {
    displayNum = (Number(displayNum) * -1).toString()
    setDisplay()
})

const op = document.getElementsByClassName("Operator")
for(let i = 0; i < op.length; i++) {
    op[i].addEventListener("click", () => {
        Operator(op[i].value)
    })
}

const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
    displayNum = '0'
    operand1 = null
    operand2 = null
    operator = null
    document.getElementById("display").innerText = ''
    console.log("hello")
})