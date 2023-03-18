var calculation = document.getElementById('calculation');
var result = document.getElementById('result');

var operator = '';
var numberLeft = 0;
var isNewResult = false;

function add(number) {
    if(isNewResult) {
        result.value = 0;
        isNewResult = false;
    }
    result.value = result.value * 10 + number;
}

function erase() {
    result.value = Math.floor(result.value / 10);
}

function reset() {
    calculation.value = '';
    result.value = 0;
}

function resetEntry() {
    result.value = 0;
}

function fract() {
    calculation.value = `1/(${result.value})`;
    result.value = 1/(result.value);
    isNewResult = true;
}

function sqrt() {
    calculation.value = `√(${result.value})`;
    result.value = Math.sqrt(result.value);
    isNewResult = true;
}

function square() {
    calculation.value = `sqr(${result.value})`;
    result.value = result.value ** 2;
    isNewResult = true;
}

function percent() {
    result.value = result.value / 100;
    isNewResult = true;
}

function invert() {
    result.value = -result.value;
    isNewResult = true;
}

function setOperator(signOperator) {
    isNewResult = true;
    numberLeft = result.value;
    operator = signOperator;
    calculation.value = `${numberLeft} ${operator}`;
}

function calculate() {
    calculation.value = `${numberLeft} ${operator} ${result.value} = `;
    isNewResult = true;
    
    switch(operator) {
        case '+':
            result.value = parseInt(numberLeft) + parseInt(result.value);
            break;
        case '-':
            result.value = parseInt(numberLeft) - parseInt(result.value);
            break;
        case '×':
            result.value = numberLeft * result.value;
            break;
        case '÷':
            result.value = numberLeft / result.value;
            break;
        default:
            calculation.value = '';
            break;
    }
}