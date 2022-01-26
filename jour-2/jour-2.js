// 01 Number

var integer = 102;
var float = 13.9;
console.log(integer,float);

// 02 Convert

var basic = 34;
var stringfield = basic.toString();
console.log(stringfield);

// 03 Round

var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

// 04 Arithmétique

var test = 12;
var bis = 5;
console.log("12+5 = ",test+bis);
console.log("12-5 = ",test-bis);
console.log("12*5 = ",test*bis);
console.log("12/5 = ",test/bis);
console.log("12 ** 5 = ",test**bis);
console.log("12 % 5 = ",test%bis);

// 05 Comparaison

var test = 143;
var bis = 219;
console.log("143 > 219 =",test > bis)
console.log("143 < 219 =",test < bis)
console.log("143 >= 219 =",test >= bis)
console.log("143 <= 219 =",test <= bis)
console.log("143 == 219 =",test == bis)
console.log("143 === 219 =",test === bis)
console.log("143 != 219 =",test != bis)
console.log("143 !== 219 =",test !== bis)


// 06 Condition

var limit = 50;
var score = 64;

if(score >= limit){
    console.log("Ok good!");
}else{
    console.log("Oh nooo...");
}


// 07 Condition II

var password = "azerty"

if(password.length > 5){
    console.log("The password is secure");
}else{
    console.log("The password is not secure");
}


// 08 Condition III

if(score >= limit && password.length > 5){
    console.log("Everything is good")
}
if(score <= limit || password.length > 5){
    console.log("Something is good")
}
else{
    console.log("Nothing is good")
}

// Bonus 1
var min = 1;
var max = 6;

var random = Math.floor(Math.random() * (max - min + 1) + min);
if(random == 6){
    console.log("Yes, i win")
}
else{
    console.log("So close")
}



// Bonus 2

var month = "January";

switch(month){
    case "November":
    case "December":
    case "January":
    case "February":
    case "March":
    console.log("Winter");
        break;
    case "April":
    case "May":
    case "June":
        console.log("Spring");
        break;
    case "July":
    case " August":
        console.log("Summer");
        break;
    case "September":
    case "October":
        console.log("Fall")
}
// Bonus III
