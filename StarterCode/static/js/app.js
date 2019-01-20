// from data.js
var tableData = data;

// YOUR CODE HERE!
// Identify where the table data is going to go
var tbody = d3.select("tbody");


tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});



var filter = d3.select("#filter-btn");
filter.on("click", function() {

    var inputDate = d3.select("#datetime");
    var filterdate = inputDate.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === filterdate);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
    });


});



