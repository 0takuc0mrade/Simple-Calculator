"use strict";

//selecting the elements
const firstInput = document.getElementById("input-1");
const secondInput = document.getElementById("input-2");
const operatorInput = document.getElementById("operator");
const calculate = document.getElementById("calc");
const resultOutput = document.getElementById("result");

calculate.addEventListener("click", () => {
  const num1 = parseFloat(firstInput.value);
  const num2 = parseFloat(secondInput.value);
  const operator = operatorInput.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultOutput.textContent = "Error: Invalid input";
    return;
  }

  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "Error: Division by zero is not allowed";
    }
  } else {
    result = "Error: Invalid operator";
  }
  resultOutput.textContent = result;
});

document.getElementById("Refresh").addEventListener("click", () => {
  firstInput.value = "";
  secondInput.value = "";
  operatorInput.value = "";
  resultOutput.textContent = 0;
});
