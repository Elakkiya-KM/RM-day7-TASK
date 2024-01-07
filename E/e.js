const URL = "https://restcountries.com/v3.1/all";
var request = new XMLHttpRequest();
request.open("GET", URL);
request.send();

request.onload = function () {
  var countriesData = JSON.parse(request.response);

  // Using filter method to get countries that use USD as currency
  let usDollarCountries = countriesData.filter(
    (country) => country.currencies && country.currencies.hasOwnProperty("USD")
  );

  console.log("Countries using US dollars:", usDollarCountries);
};
