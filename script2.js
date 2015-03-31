console.log(123);

// var inputFlightCode = $('#inputFlightCode').val().toUpperCase(); //transform the data input so it can be compared

var uponSuccess = function(data) {
  console.log(data);
          var len = data.length; //start a loop 
          for(var i=0;i<len;i++){
            if(inputFlightCode === data.iata) { //compare the value input with the json linked
                var city = flighdata.city; //print out the rest of the var of that object
                var lat1 = flighdata.latitude;
                var lon1 = flighdata.longitude;
                console.log(city);
              
          }
  }


// var uponSuccess = function(data) {

//   console.log(data);
//   //write logic for DOM manipulation
// 	$(".departAirport>h2").html(data.iata);
// 	$("p.airport-name").html(data.city);
// 	$("p.weather-condition").html(data.latitude);
// 	$("p.location").html(data.longitude);
// }

$('#inputFlightCode').submit(function(event) {
  event.preventDefault();
  console.log("body!");
  $.getJSON("https://s3.amazonaws.com/airportinformation/airports.json", uponSuccess);
});