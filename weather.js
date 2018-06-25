$(document).ready(function() {

  var oslo = $("#oslo");
  var london = $("#london")
  var moscow = $("#moscow")

$.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Oslo,no&APPID=6365d49cbfb4f469b7ff20b44cda9418',
        type: 'GET',
        success: function(data){
          // To get capital letter; beautifying
          var weather = data.weather[0].description.charAt(0).toUpperCase()  + data.weather[0].description.slice(1);
          var weatherInfo = $("<div>" + weather + "</div>").appendTo(oslo);
          weatherInfo.addClass("weather-info")
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(textStatus + errorThrown); //Better diagnostics
        }
    });


$.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6365d49cbfb4f469b7ff20b44cda9418',
        type: 'GET',
        success: function(data){
          // To get capital letter; beautifying
          var weather = data.weather[0].description.charAt(0).toUpperCase()  + data.weather[0].description.slice(1);
          var weatherInfo = $("<div>" + weather + "</div>").appendTo(london);
          weatherInfo.addClass("weather-info")
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(textStatus + errorThrown); //Better diagnostics
        }
    });


$.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&APPID=6365d49cbfb4f469b7ff20b44cda9418',
        type: 'GET',
        success: function(data){
          // To get capital letter; beautifying
          var weather = data.weather[0].description.charAt(0).toUpperCase()  + data.weather[0].description.slice(1);
          var weatherInfo = $("<div>" + weather + "</div>").appendTo(moscow);
          weatherInfo.addClass("weather-info")
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert(textStatus + errorThrown); //Better diagnostics
        }
    });
  });

//
// $("<div/>", {
//   class: "user-name",
//   text: employee.firstname + " " + employee.surname
// }).appendTo(userBox);
