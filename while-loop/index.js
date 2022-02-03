// 01 - Comptons
var i = 50; // Valeur de départ
while(i <= 200){    // tant que 50 est inférieur ou égal a 200:
    if(i %2 === 0){ // si i modulo 2 est égal a 0 :
        console.log("01 comptons --> ", i)
    }
    i++;               // incrémentation
}

// 02 Try again
let dice = null;
let count = 0;
let min = 1;
let max = 6;
while(dice <= 6){                               // tant que dice ne vaut pas 6
    dice = Math.random() * (max - min + 6) ;    // dice est égal à la fonction Math random avec une limite de 6
    count++;                                    // +1 a la var count à chaque tour
}
console.log("02 Try again --> ",count)

// 03 Course

let usainBolt = 0;
let tysonGay = 0;
while(usainBolt <= 100 && tysonGay <= 100){     // tant que usain bolt et tyson gay sont inférieur ou égal à 100:
    usainBolt += Math.ceil(Math.random()*10);   // bolt égale à bolt + Math.ceil en par. Math.random et * 10
    tysonGay += Math.ceil(Math.random()*10);    // Tyson égale à tyson + Math.ceil en par. Math.random et * 10
    console.log("usain bolt -->",usainBolt,"tyson gay -->",tysonGay);   // résultat à chaque tour
}
if(usainBolt > 100 && tysonGay <= 100){
    console.log("Usain is the winner");
}
else if(tysonGay > 100 && usainBolt <= 100){
    console.log("Tyson is the winner")
}
else if(usainBolt > 100 && tysonGay > 100){
    console.log("everybody win")
}