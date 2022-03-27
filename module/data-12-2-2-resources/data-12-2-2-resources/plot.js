console.log(cityGrowths);

//Sort cities
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

//The next step is to select only the top five cities by population growth. We'll use slice() to perform this task.
var topFiveCities = sortedCities.slice(0,5);

//use map() to create a separate array of the top five city names, as well as the top five growth figures. How would we help her do this?
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

//The final task is to render these arrays in Plotly
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  
