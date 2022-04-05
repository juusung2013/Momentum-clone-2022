//아주 아주 간단한 계산기

function plus(firstNumber, SecondNumber) {
  console.log(firstNumber + SecondNumber);
}

function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(98, 20);

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " nice to meet you");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
