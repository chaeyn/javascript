// playerxx로 중복됨

const playerName = 'nico';
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = 'little bit';

// nico, 121212, true가 어떤 의미인지 알려주지 않음

const playerArr = ['nico', 121212, true, 'little bit'];

const player = {
  name: 'nico',
  points: 10,
  handsome: true,
  fat: 'little bit',
};

console.log(player);
console.log(player.name);
console.log(player['points']);

player.fat = false;
player.lastName = 'potato';
player.points = player.points + 15;
console.log(player);
