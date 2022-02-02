// 01  Array

var fruits = ["mango","lemon","blueberry"];
console.log("01 Array --> ",fruits);

// 02 Acces

var ingredients = ["eggs","milk","butter"];
console.log("02 Acces --> ",ingredients[1]);
console.log("02 Acces --> ",ingredients[2]);

// 03 Add and Remove

var object = ["pen","book","lamp"];
console.log("03 Add and Remove --> ",object);
object.unshift("chair");
console.log("03 Add and Remove --> ",object);
object.pop("lamp");
console.log("03 Add and Remove --> ",object);
object.push("laptop");
console.log("03 Add and Remove --> ",object);
object.shift();
console.log("03 Add and Remove --> ",object);

// 04 Order

var numbers = [4,10,8,12,6]
console.log("04 Order --> ",numbers);
numbers.reverse();
console.log("04 Order --> ",numbers);
numbers.sort((a, b) => a - b);
console.log("04 Order --> ",numbers);

// 05 Boucle

var total = 0;
var limit = 10;
console.log("05 Boucle --> ",total,limit);
var result = 0;
var i = 0;
for(i = 0; i <= limit; i++){
    total = total + i ;
}
console.log("05 Boucle --> ",total);

// 06 Reverse

var sentence = "Hello Konexio !";
console.log("06 Reverse --> ",sentence)
var result = "";
for(var i = sentence.length-1; i >= 0; i--){
    result = result + sentence[i];
}
console.log("06 Reverse --> ",result);

// Bonus


for(var i = 0; i <= 100; i++){
    var result = "";
    if(i % 3 === 0){
        result = result + "fizz";
    }
    if(i % 5 === 0){
        result += "buzz"
    }
    if( i % 7 !== 0){
        console.log(result || i );
    }
}

// Bonus II

while(i <= limit){
    tota = total + i;
    i++;
}

console.log("Bonus II --> ", total)