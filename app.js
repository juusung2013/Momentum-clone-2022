//아주 아주 간단한 계산기

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  min: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  mul: function (a, b) {
    console.log(a * b);
  },
  squ: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(50, 5);
calculator.min(50, 5);
calculator.div(50, 5);
calculator.mul(50, 5);
calculator.squ(50, 5);
