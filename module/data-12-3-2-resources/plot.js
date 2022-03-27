const url = "https://api.spacexdata.com/v2/launchpads";

d3.json("samples.json").then(function(data){
    console.log(data);
});













//Roza has made a definite step forward. With the following code, we can display the metadata of any individual from the dataset:

//d3.json("samples.json").then(function(data){
//   firstPerson = data.metadata[0];
//   Object.entries(firstPerson).forEach(([key, value]) =>
//    {console.log(key + ': ' + value);});
//});