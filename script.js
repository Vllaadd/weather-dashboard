var apiKey = "166a433c57516f51dfab1f7edaed8413";

$(document).ready(function(){

// click button•••••••••••••••••••••••••••••••••••••••••••

        $("#submit").click(function(){
            getWeather();
            fiveDayForecast();
        });

// current forecast•••••••••••••••••••••••••••••••••••••••

            function getWeather(){
                var city = $("#input").val();
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey,
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    $("#date").html(new Date().toLocaleDateString("en-US"));
                    $("#city").html(data.name + " , " + data.sys.country);
                    $("#temp").html(data.main.temp);
                    $("#humidity").html(data.main.humidity);
                    $("#wind").html(data.wind.speed);
                    uvIndex(data.coord.lat, data.coord.lon);
                }
            });
        };

// five day forecast•••••••••••••••••••••••••••••••••••••• 

        var fiveDayKey = "166a433c57516f51dfab1f7edaed8413";
       let fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast";

            function fiveDayForecast(){
                var city = $("#input").val();
                $.ajax({
                    url: fiveDayUrl,
                    dataType: "json",
                    type: "GET",
                    data: {
                        q: city,
                        appid: fiveDayKey,
                        units: "imperial",
                        cnt: "40"
                    },
                    success: function(data){
                        for(var i=0; i<data.list.length; i+=5){
                            let colDiv = $("<div>").addClass("col col-lg-2");
                            let carD = $("<div>").addClass("card text-white bg-primary m-3");
                            let cardBody = $("<div>").addClass("card-body");
                            let cardTitle = $("<h5>").addClass("card-title").text(new Date(data.list[i].dt_txt).toLocaleDateString("en-US"));
                            let img = $("<img>").attr("src","https://api.openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");
                            let cardText1 = $("<p>").addClass("card-text").text("Temp: " + data.list[i].main.temp + "F");
                            var cardText2 = $("<p>").addClass("card-text").text("Humidity: " + data.list[i].main.humidity + "%"); 
                            colDiv.append(carD.append(cardBody.append(img, cardTitle, cardText1, cardText2)));
                            $("#five-day-forecast").append(colDiv);
                        }
                    }
                })
            }

//UV index ••••••••••••••••••••••••••••••••••••••••••••••••••••••••••

            function uvIndex(lat, lon){
                $.ajax({
                    url: "https://api.openweathermap.org/data/2.5/uvi?",
                    dataType: "json",
                    type: "GET",
                    data: {
                        lat: lat,
                        lon:lon,
                        appid: apiKey
                    },
                    success: function(data){
                        $("#uv").html(data.value)
                    }
                })
            }    
    });



