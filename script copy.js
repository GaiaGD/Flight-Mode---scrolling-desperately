console.log(123);
// change background
var myHours = new Date();
var myHours = myHours.getHours();
if (myHours >= 5 && myHours <= 9) {
      $("body").addClass("gradient-dawn");
  } else if (myHours > 9 && myHours <= 16) {
       $("body").addClass("gradient-day");
     } else if (myHours > 16 && myHours <= 19) {
       $("body").addClass("gradient-evening");
     } else if (myHours >19 && myHours <= 23) {
       $("body").addClass("gradient-day");
     } else {
       $("body").addClass("gradient-night");
     }

// watch and calendar 
var myMinute = new Date(); 
    var myMinute = myMinute.getMinutes();

var myDayNumber = new Date(); 
    var myDayNumber = myDayNumber.getDate();

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday" ]
var myDay = new Date();
    var myDay = days[myDay.getDay()-1]; //why?

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
    var flightCode = data[i];
    if(inputFlightCode === flightCode.13) {
        var iata = flightCode.11;
        // var city = flightCode.city;
        var lat1 = flightCode.latitude;
        var lon1 = flightCode.longitude;
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
  $.getJSON("http://www.flightradar24.com/zones/full_all.json", uponSuccess);
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
