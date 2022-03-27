const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//The actual API call to SpaceX is made in these two lines of code:
//In the first line, the URL to the SpaceX is defined.
//In the second line, d3.json() method places a call to SpaceX's API, retrieves the data, and prints it to the browser console.

// to retrieve only the first element in the array returned from the API call use the following
//d3.json(url).then(spaceXResults =>
 //   console.log(spaceXResults[0]));

 //he code to retrieve the full_nameof the Vandenberg Air Force Base would look like this:
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name))

//How would Roza access the latitude of the Vandenberg Airforce Base?
//d3.json(url).then(spaceXResults =>
//console.log(spaceXResults[0].location.latitude));

//The syntax used to retrieve data from an external data file, instead of a web API, is the same:
//d3.json("samples.json").then(function(data){
//    console.log("hello");
//});


//The short explanation is that, for security reasons, a local server must be run when loading an external file into a JavaScript script file. If you don't understand these security issues right now, don't worry. We will come back to it later.

//To load the page, navigate to the directory where samples.json and index.html, as well as the script file, plots.js, are located. Open the command line (Terminal or Git Bash) and type the following:
//Surface@DESKTOP-QQVMS3I MINGW64 ~/Desktop/Class/Plotly/data-12-3-2-resources (main)
//$ python -m http.server