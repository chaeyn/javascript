function sayHello(nameOfPerson, age) {
  console.log('Hello my name is', nameOfPerson + ',', age, 'years old');
}

sayHello('nico', 23);
sayHello('dal', 10);
sayHello('lynn', 17);

function plus(firstNumber, secondNumber) {
  console.log('result is', firstNumber + secondNumber);
}
function divide(firstNumber, secondNumber) {
  console.log('result is', firstNumber / secondNumber);
}

plus(2, 3);
divide(5, 2);

const player = {
  name: 'nico',
  sayHello: function (otherPersonsName) {
    console.log('Hello', otherPersonsName, 'nice to meet you');
  },
};

console.log(player.name);
player.sayHello('lynn');
