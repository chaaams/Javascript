// 01 Countries

const request = require('request');

const apiBase = 'https://restcountries.com/v3.1/all';
const countryNames = [];

request.get(apiBase, function(err,res,body){
    if(err){
        console.log(err);
        return;
    }
     countries = JSON.parse(body).map(function(country){
        return country.name.common
     });
     console.log(countries.join(" - "))

})
