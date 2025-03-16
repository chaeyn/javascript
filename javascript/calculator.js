const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  times: function (a, b) {
    return a * b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(5, 8);
const timesResult = calculator.times(5, 8);
const minusResult = calculator.minus(5, 8);
const divideResult = calculator.divide(5, 8);
const powerResult = calculator.power(5, 8);
