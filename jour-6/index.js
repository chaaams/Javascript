// 01 Date

function formatDate(dateString) {

    var date = new Date(dateString);

    var jj = date.getDate().toString().padStart(2, "0");
    var mm = (date.getMonth() + 1).toString().padStart(2, "0");

    console.log(`Result: ${jj}/${mm}/${date.getFullYear()}`)

}

formatDate("1977-12-15");

