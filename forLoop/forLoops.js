// 01 Somme
var total = 0; 

for(var i =5 ; i <= 10; i++){
    total = total + i * i;    
}
console.log("01 Somme --> " + total)
 
// 02 Comptons

var result = "";

for(var i = 100; i <= 1000; i++){
    if( i % 7 === 0){
        result++;
    }  
}
console.log("02 Comptons --> ",result)

// 03 Chanceux
var dicesSum = 0;
var min = 1;
var max = 6;
for(let i = 1; i <= 20; i++){
    let diceRoll = Math.floor(Math.random() * (max - min + 1) + min);
    if(diceRoll >= 5){
        dicesSum = dicesSum + diceRoll;
    }
}
console.log("03 Chanceux --> ",dicesSum)


