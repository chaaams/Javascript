// 01 sum
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let numbers = [];
for(let i = 0; i < 50; i++){
    numbers.push(getRandomArbitrary(0,50));
}
console.log(numbers)