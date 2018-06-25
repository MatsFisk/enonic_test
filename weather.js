$(document).ready(function() {

  var oslo = $("#oslo");
  var london = $("#london")
  var minsk = $("#minsk")

  checkWeather(true);

});


function checkWeather(firstRun) {

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Oslo,no&APPID=6365d49cbfb4f469b7ff20b44cda9418',
    type: 'GET',
    success: function(data) {

      // To get capital letter; beautifying
      var weather = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

      var weatherTime = moment().format("dd, MMM Do YY, k:mm");

      if (firstRun) {

        var weatherInfo = $("<div>" + weather + "<br>" + weatherTime + "</div>").appendTo(oslo);

        weatherInfo.attr('id', 'weather-info-oslo')
        weatherInfo.addClass("weather-info");
      } else {
        $('#weather-info-oslo').html("<div>" + weather + "<br>" + weatherTime + "</div>");
      }

    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert(textStatus + errorThrown); //Better diagnostics
    }
  });


  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6365d49cbfb4f469b7ff20b44cda9418',
    type: 'GET',
    success: function(data) {

      // To get capital letter; beautifying
      var weather = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

      var weatherTime = moment().format("dd, MMM Do YY, k:mm");

      if (firstRun) {

        var weatherInfo = $("<div>" + weather + "<br>" + weatherTime + "</div>").appendTo(london);

        weatherInfo.attr('id', 'weather-info-london')
        weatherInfo.addClass("weather-info");

      } else {

        $('#weather-info-london').html("<div>" + weather + "<br>" + weatherTime + "</div>");

      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert(textStatus + errorThrown); //Better diagnostics
    }
  });


  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Minsk,by&APPID=6365d49cbfb4f469b7ff20b44cda9418',
    type: 'GET',
    success: function(data) {

      // To get capital letter; beautifying
      var weather = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
      
      var weatherTime = moment().format("dd, MMM Do YY, k:mm");

      if (firstRun) {
        var weatherInfo = $("<div>" + weather + "<br>" + weatherTime + "</div>").appendTo(minsk);

        weatherInfo.attr('id', 'weather-info-minsk')
        weatherInfo.addClass("weather-info");

      } else {

        $('#weather-info-minsk').html("<div>" + weather + "<br>" + weatherTime + "</div>");

      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert(textStatus + errorThrown); //Better diagnostics
    }
  });
  setTimeout(function() {
    checkWeather(false);
  }, 60000);

};
