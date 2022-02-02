// 01 Date

function formatDate(dateString) {

    var date = new Date(dateString);

    var jj = date.getDate().toString().padStart(2, "0"); // récupère le jour de la date en string et un padstart de 2
    var mm = (date.getMonth() + 1).toString().padStart(2, "0"); // récupère le mois de la date en string et un padstart de 2

    console.log(`Result: ${jj}/${mm}/${date.getFullYear()}`)

}

formatDate("1977-12-15");

// 02 Age

function calculateAge(dateBirth){
    var date = new Date(dateBirth);
    var age = new Date (new Date() - date);
    return age.getFullYear() - 1970;
}
console.log("02 Age --> ",calculateAge("1996-08-03"));

// 03 Validator 


var prompt = require("prompt");

var schema = {
  properties: {
    email: { 
        pattern: /^\S+@\S+\.\S+$/, required: true, message:"Email non valide" },
    username: {
        pattern: /^[a-zA-Z-]+$/, required: true, message:"Username non valide"},
    password: {
        required: true, message:"Password non valide", conform: function (value) {
        if (value.search(/.{6,}/) === -1) {
            return false;
        }

        if (value.search(/[a-zA-Z]/) === -1) {
            return false;
        }

        if (value.search(/[0-9]/) === -1) {
            return false;
        }

        if (value.search(/[^a-zA-Z0-9-]/) > -1) {
            return false;
        }

        return true;
    }}
  },
};

prompt.start();
prompt.get(schema, (err, res) => {
    console.log(res);
});
