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

console.log("02 Order --> ",cat.age);
console.log("02 Order --> ",cat['age']);

console.log("02 Order --> ",cat2.isCute);
console.log("02 Order --> ",cat2['isCute']);

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
        consle.log("04 Compare --> both are the same")
    }
    else if(num2>num1){
        console.log("04 Compare --> num2 is bigger")
    }
}

compare(45,315);


