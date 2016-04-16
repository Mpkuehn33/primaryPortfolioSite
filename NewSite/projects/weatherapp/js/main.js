$(document).ready(function(){
    var mgn = $(document).height();
    var mgnv = mgn / 8;
    if (mgn < 560){
        mgnv = mgn / 6;
    };
   $(".mainbox").css("margin-top", mgnv);
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    } else { 
        return;
        alert("error");
    }
};

var weatherData = {
    location: '',
    country: '',
    temperature: 70,
    celsius: '',
    icon: '',
    coverage: '',
    humidity: '',
    sunset: 0,
    sunrise: 0,
    currentTime: new Date(),
    wind: '',
    updateSun: function(timestamp){
        var dt = new Date(timestamp * 1000);
        return ('-- ' + dt + ' --');
    },
};

function setPosition(position) {
    weatherData.latitude = position.coords.latitude.toString(); 
    weatherData.longitude = position.coords.longitude.toString();
    setWeatherData();
};

var setWeatherData = function() {
$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + weatherData.latitude + '&lon=' + weatherData.longitude + '&units=imperial&APPID=ced8c92da899a2ff13ff69860b52cb92', function(json){
    weatherData.location = json.name;
    weatherData.country = json.sys.country;
    weatherData.sunrise = weatherData.updateSun(json.sys.sunrise);
    weatherData.sunset = weatherData.updateSun(json.sys.sunset);
    weatherData.icon = json.weather[0].id;
    weatherData.coverage = json.weather[0].main;
    weatherData.temperature = Math.round(json.main.temp);
    weatherData.celsius = Math.round(5/9 * ((json.main.temp) - 32));
    weatherData.humidity = json.main.humidity;
    weatherData.wind = Math.round(json.wind.speed);
    updatePage();
})};

var fixTime = {
    hours: '',
    minutes: '',
    setTime:function(time){
        var hrs = time.getHours();
        var mins = time.getMinutes();
        var secs = time.getSeconds();
        if (hrs < 10){
            hrs = "0" + hrs;
        }
        if (mins < 10){
            mins = "0" + mins;
        }
        if (secs < 10){
            secs = "0" + secs;
        }
        return hrs + ":" + mins + ":" + secs;
    }
}


var updatePage = function(){
    $("#temp").text(weatherData.temperature + "\u00B0" + "F / " + weatherData.celsius + "\u00B0" + "C");
    $('#icon').attr('class', 'wi wi-owm-' + weatherData.icon);
    $('#location').text("Weather Report for " + weatherData.location + ", " + weatherData.country);
    $('#coverage').text(weatherData.coverage);
    $('#time').text(fixTime.setTime(weatherData.currentTime));
    $('#sunset').text(weatherData.sunset.substr(19,9));
    $('#sunrise').text( weatherData.sunrise.substr(19,9));
    $('#wind').text(weatherData.wind + "MPH");
    $('#humidity').text(weatherData.humidity + "%");    
}

$(document).ready(function(){
    getLocation();
});