// const mon = 'mon';
// const tue = 'tue';
// const wed = 'wed';
// const thu = 'thu';
// const fri = 'fri';
// const sat = 'sat';
// const sun = 'sun';

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const nonsense = [1, 2, 'hello', false, null, true, undefined, 'nico'];

console.log(daysOfWeek);
console.log(nonsense);

// Get Item from Array
console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push('sun');

console.log(daysOfWeek);

const toBuy = ['potato', 'tomato'];
toBuy.push('kimch');
console.log(toBuy);
console.log(toBuy[2]);
