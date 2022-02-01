// 01 - Comptons
var i = 50;
while(i <= 200){
    if(i %2 === 0){
        console.log("01 comptons --> ", i)
    }
    i++;
}

// 02 Try again
let dice = null;
let count = 0;
let min = 1;
let max = 6;
while(dice <= 6){
    dice = Math.random() * (max - min + 6) ;
    count++;
}
console.log("02 Try again --> ",count)

// 03 Course

let usainBolt = 0;
let tysonGay = 0;
while(usainBolt <= 100 && tysonGay <= 100){
    usainBolt += Math.ceil(Math.random()*10);
    tysonGay += Math.ceil(Math.random()*10);
}
if(usainBolt > 100){
    console.log("Usain is the winner");
}
else if(tysonGay > 100){
    console.log("Tyson is the winner")
}
else{
    console.log("no one win")
}