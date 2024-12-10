let operand1
let operand2
let operator
let displayNum = '0'

function operate(op1, op2, operator) {
    let ans = 0
    switch(operator) {
        case '+':
            ans = op1 + op2
            operand1 = ans
            displayNum = ans.toString()
            setDisplay()
            displayNum = '0'
            break
        case '-':
            ans = op1 - op2
            operand1 = ans
            displayNum = ans.toString()
            setDisplay()
            displayNum = '0'
            break
        case '*':
            ans = op1 * op2
            operand1 = ans
            displayNum = ans.toString()
            setDisplay()
            displayNum = '0'
            break
        case '/':
            if(op2 == 0) {
                alert("division by zero not allowed, clearing the calculator")
                displayNum = '0'
                operand1 = null
                operand2 = null
                operator = null
                document.getElementById("display").innerText = ''
            } else {
                ans = op1 / op2
                operand1 = ans
                displayNum = ans.toString()
                setDisplay()
                displayNum = '0'
            }
            break
    }
}

function setDisplay() {
    const disp = document.getElementById("display")
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
    const check = document.getElementById("display")
    if(check.innerText == '') {
        alert("no number entered")
    } else if(operand1 == null) {
        operand1 = Number(displayNum)
        displayNum = ''
        operator = op
    } else {
        operate(operand1, Number(displayNum), operator)
        operator = op
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
})

const equals = document.getElementById("equals")
equals.addEventListener("click", () => {
    if(operand1 == null) {
        alert("no number entered")
    } else if(operator == null) {
        alert("no operator entered")
    } else {
        operate(operand1, Number(displayNum), operator)
        operator = null
    }
})

const percent = document.getElementById("percentage")
percent.addEventListener("click", () => {
    if(operand1 == null) {
        if(displayNum == null) {
            alert("no number entered")
        } else {
            displayNum = (Number(displayNum) / 100).toString()
            setDisplay()
        }
    } else if(displayNum == ''){
        displayNum = operand1 / 100
        setDisplay()
        operand1 = null
    } else {
        operate(operand1, Number(displayNum), operator)
        displayNum = operand1 / 100
        setDisplay()
        operand1 = null
    }
})

const dec = document.getElementById("decimal")
dec.addEventListener("click", () => {
    if(!displayNum.includes('.')) {
        displayNum = displayNum + '.'
        setDisplay()
    }
})