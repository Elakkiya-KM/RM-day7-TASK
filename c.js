// c. Print the following details name, capital, flag, using forEach function

const URL = "https://restcountries.com/v3.1/all";
var request = new XMLHttpRequest();
request.open("GET", URL);
request.send();

request.onload = function () {
  var countriesData = JSON.parse(request.response);
  countriesData.forEach((country) => {
    console.log("Name:", country.name);
    console.log("Capital:", country.capital);
    console.log("Flag:", country.flags[0]); // Assuming flags is an array
    console.log("-----------------------");
  });
};
