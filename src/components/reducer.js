export function reducer(result, action) {
  switch (action.type) {
    case "+":
      handlePlus(result);
      return { ...result };
    case "-":
      handleMinus(result);
      return { ...result };
    case "*":
      handleMultiply(result);
      return { ...result };
    case "/":
      handleDivide(result);
      return { ...result };
    case "=":
      handleEqual(result);
      return { ...result };
    case "C":
      handleClear(result);
      return { ...result };
    default:
      handleDigit(result, action);
      return { ...result };
  }
}

function handlePlus(result) {
  result.prevValue = operationHelper(
    +result.prevValue,
    +result.result,
    result.prevOperator
  );
  result.prevOperator = "+";
  result.result = "0";
}

function handleMinus(result) {
  result.prevValue = operationHelper(
    +result.prevValue,
    +result.result,
    result.prevOperator
  );
  result.prevOperator = "-";
  result.result = "0";
}

function handleMultiply(result) {
  if (result.prevValue === "0") {
    result.prevValue = "1";
  }
  result.prevValue = operationHelper(
    +result.prevValue,
    +result.result,
    result.prevOperator
  );
  result.prevOperator = "*";
  result.result = "0";
}

function handleDivide(result) {
  if (result.prevValue === "0") {
    result.prevValue = "1";
  }
  result.prevValue = operationHelper(
    +result.prevValue,
    +result.result,
    result.prevOperator
  );
  result.prevOperator = "/";
  result.result = "0";
}

function handleEqual(result) {
  result.result = operationHelper(
    +result.prevValue,
    +result.result,
    result.prevOperator
  );
  result.prevOperator = "";
}

function handleClear(result) {
  result.result = "0";
  result.prevOperator = "";
  result.prevValue = "0";
}

function handleDigit(result, action) {
  if (result.completed) {
    result.result = action.payload;
  } else {
    if (result.result === "0") {
      result.result = action.payload;
    } else {
      result.result += action.payload;
    }
  }
}

function operationHelper(firstNumber, secondNumber, operation) {
  if (operation === "+") {
    return firstNumber + secondNumber;
  } else if (operation === "-") {
    return firstNumber - secondNumber;
  } else if (operation === "*") {
    return firstNumber * secondNumber;
  } else if (operation === "/") {
    return firstNumber / secondNumber;
  } else {
    return secondNumber;
  }
}
