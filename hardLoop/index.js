// 01 sum
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
let numbers = [];
let result = 0;
for(let i = 0; i < 50; i++){
    numbers.push(getRandomArbitrary(0,100));
}
console.log("01 Sum --> ",numbers)
for(let i = 0; i < 50; i++){
    result += numbers;
}
//console.log(result)


// 02 Max


for (let i = 0; i < 50; i++){
numbers.push(getRandomArbitrary(50,200))
}

console.log("02 Max --> ",numbers)



