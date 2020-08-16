const result = document.querySelector(".js-result");
const reset = document.querySelector(".js-reset");
const equals = document.querySelector(".js-equals");
const numbers = Array.from(document.querySelectorAll(".js-number"));
const operations = Array.from(document.querySelectorAll(".js-operation"));

let firstValue = "",
  firstDone,
  secondValue = "",
  secondDone,
  currentOperation;

function doOperation() {
  const intValueA = parseInt(firstValue, 10);
  const intValueB = parseInt(secondValue, 10);
  switch (currentOperation) {
    case "+":
      return intValueA + intValueB;
    case "-":
      return intValueA - intValueB;
    case "*":
      return intValueA * intValueB;
    case "/":
      return intValueA / intValueB;
    default:
      return;
  }
}
function calculate() {
  const operation = doOperation();
  result.innerHTML = operation;
}

function handleOperationClick(e) {
  const clickedOperation = e.target.innerText;
  if (!firstDone) {
    firstDone = true;
  }
  if (firstDone && secondDone) {
    calculate();
  }
  currentOperation = clickedOperation;
}

function handleNumberClick(e) {
  const clickedNum = e.target.innerText;

  if (!firstDone) {
    firstValue = firstValue + clickedNum;
    result.innerHTML = firstValue;
  } else {
    secondValue = secondValue + clickedNum;
    result.innerHTML = secondValue;
    secondDone = true;
  }
}
function handleReset() {
  firstValue = "";
  secondValue = "";
  firstDone = false;
  secondDone = false;
  currentOperation = null;
  result.innerHTML = "0";
}
function handleEqualsClick() {
  if (firstDone && secondDone) {
    calculate();
  }
}
numbers.forEach(function (number) {
  number.addEventListener("click", handleNumberClick);
});
operations.forEach(function (operation) {
  operation.addEventListener("click", handleOperationClick);
});
equals.addEventListener("click", handleEqualsClick);
reset.addEventListener("click", handleReset);
