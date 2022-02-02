// 01 Date

function formatDate(dateString) {

    var date = new Date(dateString);

    var jj = date.getDate().toString().padStart(2, "0"); // récupère le jour de la date en string et un padstart de 2
    var mm = (date.getMonth() + 1).toString().padStart(2, "0"); // récupère le mois de la date en string et un padstart de 2

    console.log(`Result: ${jj}/${mm}/${date.getFullYear()}`)

}

formatDate("1977-12-15");

// Age

function calculateAge(dateBirth){
    var date = new Date(dateBirth);
    var age = new Date (new Date() - date);
    return age.getFullYear() - 1970;
}
console.log("02 Age --> ",calculateAge("1996-08-03"))
