// 01 Object
var cat ={
    name:'Garfield',
    age: 3,
    isCute: true,
}
console.log("01 Object --> ",cat);
console.log("01 Object --> ",cat.age);
if(cat.isCute === true){
    console.log("So Cute");
}

// 02 Combine

var cat2 = {
    name: "Monique",
    age: 17,
    isBig: true,
}
console.log("02 Order --> ",cat2);
var cats = [cat,cat2];
console.log("02 Order --> ",cats);

console.log("02 Order --> ",cats[0].age);
console.log("02 Order --> ",cats[0]["age"]);

console.log("02 Order --> ",cats[1].isBig);
console.log("02 Order --> ",cats[1]['isBig']);

// 03 Even

function checkIfEven(num){
    if(num %2 === 0){
        console.log("03 Even --> even")
    }
    else{
        console.log("03 Even --> odd")
    }
}

checkIfEven(4);
checkIfEven(5);

// 04 Compare

function compare (num1,num2){
    if(num1>num2){
        console.log("04 Compare --> num1 is Bgger");
    }
    else if(num1===num2){
        console.log("04 Compare --> both are the same")
    }
    else if(num2>num1){
        console.log("04 Compare --> num2 is bigger")
    }
}

compare(45,315);
compare(75,2);
compare(50,50);

// 05 Add Up
    var i = 0;
    var total = 0;
function addUp(num){

    for(i=0; i <= num; i++){
        total= total + i;
    }
    console.log("05 Add Up --> ",total)
}
addUp(12);

// 06 Time 

function format (num){
    h = Math.floor(num / 3600);
    m = Math.floor(num% 3600 / 60);
    s = Math.floor(num% 3600 %60);
    console.log("06 Time --> ",h,":",m,":",s,)
}
format(800);
