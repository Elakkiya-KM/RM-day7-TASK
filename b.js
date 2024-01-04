// b. Get all the countries with a population of less than 2 lakhs using Filter function

const URL = "https://restcountries.com/v3.1/all";
var request = new XMLHttpRequest();
request.open("GET", URL);
request.send();
request.onload = function () {
  var countriesData = JSON.parse(request.response);
  let smallPopulationCountries = countriesData.filter(
    (country) => country.population < 200000
  );
  console.log(
    "Countries with population less than 2 lakhs:",
    smallPopulationCountries
  );
};
