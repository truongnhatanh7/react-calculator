export function reducer(result, action) {
  switch (action.type) {
    case '+':
      handlePlus(result)
      return {...result};
    case '-':
      handleMinus(result)
      return {...result};
    case '*':
      handleMultiply(result)
      return {...result};
    case '/':
      handleDivide(result)
      return {...result};
    case '=':
      handleEqual(result)
      return {...result};
    case 'C':
      handleClear(result)
      return {...result}
    default:
      handleDigit(result, action)
      return {...result};
  }
}

function handlePlus(result) {
  if (!result.completed) {
    result.prevValue = +result.result + +result.prevValue;
  } else {
    result.prevValue = result.result;
  }
  result.prevOperator = '+'
  result.result = '0';
}

function handleMinus(result) {
  if (!result.completed) {
    result.prevValue = +result.result - +result.prevValue;
  } else {
    result.prevValue = result.result;
  }
  result.prevOperator = '-'
  result.result = '0';
}

function handleMultiply(result) {
  if (!result.completed) {
    if (result.prevValue === '0') {
      result.prevValue = '1'
    }
    result.prevValue = +result.result * +result.prevValue;
  } else {
    result.prevValue = result.result;
  }
  result.prevOperator = '*'
  result.result = '0';
}

function handleDivide(result) {
  if (!result.completed) {
    if (result.prevValue === '0') {
      result.prevValue = '1'
    }
    result.prevValue = +result.result / +result.prevValue;
  } else {
    result.prevValue = result.result;
  }
  result.prevOperator = '/'
  result.result = '0';
}

function handleEqual(result) {
  if (result.prevOperator === '+') {
    result.result = +result.result + +result.prevValue;
  } else if (result.prevOperator === '-') {
    result.result = +result.result - +result.prevValue;
  } else if (result.prevOperator === '*') {
    console.log("multiply")
    console.log(result.result + " " + result.prevValue)
    result.result = +result.result * +result.prevValue;
  } else if (result.prevOperator === '/') {
    result.result = +result.prevValue / +result.result;
  } 
  result.prevOperator = ''
  result.completed = true;
}

function handleClear(result) {
  result.result = '0';
  result.prevOperator = ''
  result.prevValue = '0';
}

function handleDigit(result, action) {
  if (result.completed) {

    result.result = action.payload        
  } else {
    if (result.result === '0') {
      result.result = action.payload;
    } else {
      result.result += action.payload
    }
  }
  result.completed = false;
}

