const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.fat = false;
console.log(player);

//const는 값을 변경할 수 없지만, object인 const 안의 무언가를 변경하는 것은 문제없음.
//ex)

//위와같이 선언했을 때
//player = false; 불가능
//player.fat = false; 가능

player.lastName = "potato";
console.log(player);
