// 01 File System
var fs = require("fs");

fs.readFile("jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
 
    console.log("01 File system --> contenu jour07 : " + data.toString());
 });

 // 02 Map double

 let array = [1,2,3,4,5];
 let double = array.map((num) => num * 2);
 console.log("02 Map double --> ",double);

 // 03 Map Names

 let longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

let shortNames = longNames.map(function(person){
    var name = [
        {
            name: person.firstName+" "+ person.lastName
        }
    ]
    return (name);
})
console.log("03 ---> Map Names ",shortNames);
