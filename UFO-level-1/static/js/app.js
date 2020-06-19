//import data from 'data.js';
var tableData = data;

var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);



function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    Object.values(filteredData).forEach(([key, value]) => {
        console.log("Key:", key);
    });


    // // First, create an array with just the age values
    // var ages = filteredData.map(tableData => tableData.age);
   
    // var date_time = filteredData;
    
    // var state = [];
    // var country = [];
    // var shape = [];
    // var duration = [];
    // var comment = [];

    // var list = d3.select(".table-head");

    // // remove any children from the list to
    // list.html("");
  
    // // append stats to the list
    // list.append("li").text(`Mean: ${filteredData}`);
    // list.append("li").text(`Median: ${median}`);
    // list.append("li").text(`Mode: ${mode}`);
    // list.append("li").text(`Variance: ${variance}`);
    // list.append("li").text(`Standard Deviation: ${standardDeviation}`);

    //console.log(city)
}


// Iterate through each recipe object
tableData.forEach((recipe) => {
  
  // Iterate through each key and value
  Object.entries(recipe).forEach(([key, value]) => {
    
    // Use the key to determine which array to push the value to
    
});
});
// function madeCut(player) {
//     return player.madeTeam == true;
//     // A more concise way to express a boolean conditional
//     return player.madeTeam;
//   }
  
//   // Call the custom function with filter()
//   var playersOnTeam = roster.filter(madeCut);
  
//   // Display the results
//   console.log(playersOnTeam)
  
// // BONUS - Use map to build both arrays of dish and spice values
// // var dishesMapped = recipes.map(recipe => recipe.dish);
// // var spicesMapped = recipes.map(recipe => recipe.spice);

// console.log(tableData[0]);

// if (key === "datetime") {
//     date_time.push(value);
//   }
//   else if (key === "city"){
//     city.push(value);
//   }
//   else if (key === "state"){
//       state.push(value);
//   }
//   else if (key === "country"){
//       country.push(value);
//     }
//   else if (key === "shape"){
//       shape.push(value);
//   }
//   else if (key === "durationMinutes"){
//       duration.push(value);
//   }
//   else if (key === "comments"){
//       comment.push(value);
//   }
//  // console.log(date_time);
//   //console.log(comment);
//  });