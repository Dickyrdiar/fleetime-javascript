function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num2 / num2;
      break;
    default:
      return undefined;
  }
}

console.log(calculate(4, '+', 6));
console.log(calculate(4, '-', 6));
console.log(calculate(2, '*', 0));
console.log(calculate(12, '/', 0));
