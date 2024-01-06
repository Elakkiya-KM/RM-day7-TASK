// a. Get all the countries from Asia continent /region using Filter function

const URL = "https://restcountries.com/v3.1/all";
var request = new XMLHttpRequest();
request.open("GET", URL);
request.send();

request.onload = function () {
  var countriesData = JSON.parse(request.response);
  let asiaCountries = countriesData.filter(
    (country) => country.region === "Asia"
  );
  console.log("Countries in Asia:", asiaCountries);
};
