console.log(123);
// change background
var myHours = new Date();
var myHours = myHours.getHours();
if (myHours >= 5 && myHours <= 9) {
      $("body").addClass("gradient-dawn");
  } else if (myHours > 9 && myHours <= 14) {
       $("body").addClass("gradient-day");
     } else if (myHours > 14 && myHours <= 19) {
       $("body").addClass("gradient-evening");
     } else if (myHours >19 && myHours <= 23) {
       $("body").addClass("gradient-night");
     } else {
       $("body").addClass("gradient-night");
     }

// watch and calendar 
var myMinute = new Date(); 
    var myMinute = myMinute.getMinutes();

var myDayNumber = new Date(); 
    var myDayNumber = myDayNumber.getDate();

var myDay = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
  var myDay = weekday[myDay.getDay()];
  
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
var myMonth = new Date();
    var myMonth = months[myMonth.getMonth()];

$("#hours").html(myHours);
$("#minute").html(myMinute);
$("#day").html(myDay);
$("#day-number").html(myDayNumber);
$("#month").html(myMonth);

// submit code
var inputFlightCode;
//stop the function unles s i dont type a valid input - if? success?
var uponSuccess = function(data) {
  var len = data.length; //start a loop }}
  for(var i=0;i<len;i++){
    var airport = data[i];
    if(inputFlightCode === airport.iata) {
        var iata = airport.iata;
        var city = airport.city;
        var lat1 = airport.latitude;
        var lon1 = airport.longitude;
        console.log(city);    
      }
   }
   $("h2#iata-Code").html(iata);
   $("#airport-name").html(city);
   $("#latitude").html(lat1);
   $("#longitude").html(lon1);
   $(".plane-icon").addClass("plane-icon-moving");
   $("#summary-from").html(city);

}

$('#inputFlightCodeForm').submit(function(event) {
  event.preventDefault();
  console.log("body!");
  inputFlightCode = $( "#inputFlightCode" ).val().toUpperCase();
  $.getJSON("https://s3.amazonaws.com/airportinformation/airports.json", uponSuccess);
});

///////////////////////////////////// scroll to next one
jQuery.fn.extend({
  scrollTo : function(speed, easing) {
    return this.each(function() {
      var targetOffset = $(this).offset().top;
      $('html,body').animate({scrollTop: targetOffset}, speed, easing);
    });
  }
});

$('#inputFlightCodeForm').submit(function(event){
    event.preventDefault();
    console.log("miao");
    var next = $('.itinerary');
    next.scrollTo({ duration: 400, easing: 'linear' });
});

$('#tellMeAboutMyAircraft').click(function(event){
    event.preventDefault();
    var next = $('.planeInfo');
    next.scrollTo({ duration: 400, easing: 'linear' });
});

$('#tellMeAboutTheGate').click(function(event){
    event.preventDefault();
    var next = $('.gateInfo');
    next.scrollTo({ duration: 400, easing: 'linear' });
});


////////////////



// var currentWeather = "London,uk"

// $.getJSON({
//     url: "http://api.openweathermap.org/data/2.5/weather?q=" + currentWeather + "&APPID=50cba9366f1541a95876463e9885c334",
//     type: "GET",
//     dataType: 'jsonp',
//     success: function(data) {
//       // data will equal the result!
//       console.log(data)
//     }, 
//     error: function(response) {  
//       console.log(response)
//     }
//   })

var variable='London'
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+variable+",uk&callback", function(data){  
    console.log(data.name)
    console.log(data.main.temp_min)
    console.log(data.main.temp_max)
});

var variable='London,uk'
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+variable+"&APPID=50cba9366f1541a95876463e9885c334", function(data){
    console.log(data.name)
});

var variable='London,uk'
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+variable+"&APPID=50cba9366f1541a95876463e9885c334", function(data){
    console.log(data.name);
    $("#weatherCityName").html(data.name);
})

var variable='London,uk'
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+variable+"&APPID=50cba9366f1541a95876463e9885c334", function(data){
    console.log(data.weather[0].main);
$("#title").html(data.weather[0].main);
})

var variable= $("#airport-name").html();
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+variable+"&APPID=50cba9366f1541a95876463e9885c334", function(data){
    console.log(data.weather[0].main);
$("#title").html(data.weather[0].main);
})
