//아주 아주 간단한 계산기

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  min: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
  div: function (a, b) {
    return a / b;
  },
  squ: function (a, b) {
    return a ** b;
  },
};

const addResult = calculator.add(2, 3);
const minResult = calculator.min(addResult, 10);
const mulResult = calculator.mul(10, minResult);
const divResult = calculator.div(mulResult, addResult);
const squResult = calculator.squ(divResult, minResult);
