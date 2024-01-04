// d. Print the total population of countries using reduce function

const URL = "https://restcountries.com/v3.1/all";
var request = new XMLHttpRequest();
request.open("GET", URL);
request.send();

request.onload = function () {
  var countriesData = JSON.parse(request.response);
  let totalPopulation = countriesData.reduce(
    (acc, country) => acc + country.population,
    0
  );
  console.log("Total Population:", totalPopulation);
};
