Plotly.newPlot(“plotArea”, [{x:[5,10,15],y:[10,20,30]}]);
//
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey"
};

Plotly.newPlot("plotArea", [trace], layout);
//
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea", trace, layout);
//Bar Chart
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);
//Pie Chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

   //Using map method to double all elements in an array (num is arbitrary)
   var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

//Here's another way to use map(). In this example,map() is used to extract a specific property from each object in an array.

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

//Using filter to make change on certain numbers on array and filtering out others. Similar to map but with specificity

var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});

//Map function with arrow function
var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

//Filter with arrow function (returns [2,3,9,37,39])

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

Let's break down this code.

The variables a and b are replaced by anElement and anotherElement.
The first two elements that are compared might be 3 and 2. The variable anElement is assigned to 3, and anotherElement to 2.
The arrow function performs the subtraction anElement - anotherElement, or 3 - 2.
Since the result is positive (3 - 2 = 1), the order of the two numbers is reversed.
The sort()method compares another pair of elements in the array, for example 37 and 39.
Since 37 - 39 is a negative number, their ordering is kept.
The process is repeated until the array is sorted.

Appending reverse() to the above sorts the array in descending order. Try it in your browser console.

//The slice() Method
Roza also needs to be able to select a subset of the data. In her project, for example, she might perform a transformation on an array, filter it, sort it, and then display only the top five results.

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
In this example, the slice()method returns the first two elements of the integer array: [0,1]. The first argument is the position of where to begin the selection. Here, it is at index position 0. The next argument, 2, denotes the position of the array where the slicing ceases. In other words, the slice()method begins selecting the array at index position 0, and stops right before reaching index position 2. So here, it returns elements at index positions 0 and 1, but not 2.

To slice to the end of an array, you can omit the second argument:

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );