//import data from 'data.js';
var tableData = data;

var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
//form.on("submit",runEnter);



function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //console.log(inputValue);
    //console.log(tableData);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    //console.log(filteredData);
    var tbody = d3.select("tbody");

    filteredData.forEach((parameter) => {
    var row = tbody.append("tr");
    Object.entries(parameter).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
    });
}

