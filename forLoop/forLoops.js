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
var total = 0;
for(let i = 0; i < 20; i++){
    let result = (Math.ceil(Math.random() * 6));
    console.log(result);
    if(i >= 5){
        total = result + total;
    }
}
console.log("03 Chanceux --> ",total)
