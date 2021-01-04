// from data.js
var tableData = data;

// Set Variables
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var resetbtn = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Create populate function

var populate = (dataInput) => {

    dataInput.forEach(ufo_sightings => {
      var row = tbody.append("tr");
      columns.forEach(column => row.append("td").text(ufo_sightings[column])
      )
    });
  }

populate(tableData)

// Filter button action

button.on("click", () => {

    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    tbody.html("");
    let response = {
        filterDate
    }
    if(response.filterDate.length !== 0) {
        populate(filterDate);
    }

    
    // When date is not available
        else {
            tbody.append("tr").append("td").text("No UFO's this day!");
        }
})


