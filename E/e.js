// e. Print the country that uses US dollars as currency

const URL = "https://restcountries.com/v3.1/all";
var request = new XMLHttpRequest();
request.open("GET", URL);
request.send();

request.onload = function () {
  var countriesData = JSON.parse(request.response);
  let usDollarCountries = countriesData.filter((country) =>
    country.currencies.includes("USD")
  );
  console.log("Countries using US dollars:", usDollarCountries);
};
