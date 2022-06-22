// Javascript program for a simple calculator

// take the user input
const user = prompt('Please Enter operator you want to perform  ( either +, -, * or /): ');

const number1 = parseFloat(prompt ('Enter first number: '));
const number2 = parseFloat(prompt ('Enter second number: '));

let result;

if (user == '+') {
    result = number1 + number2;
}
else if (user == '-') {
    result = number1 - number2
}
else if (user == '*') {
    result = number1 * number2
}
else {
    result = number1 / number2
}


alert('The result is : ' + result);
