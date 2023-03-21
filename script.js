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
                    $("#city").html(data.name + " , " + data.sys.country);
                    $("#temp").html(data.main.temp);
                    $("#humidity").html(data.main.humidity);
                    $("#wind").html(data.wind);
                }
            });
        };

// five day forecast•••••••••••••••••••••••••••••••••••••• 
            function fiveDayForecast(data){
                $.ajax({
                    url: "https://api.openweathermap.org/data/2.5/forecastq=" + city + "&units=imperial&appid=" + apiKey,
                    dataType: "json",
                    type: "GET",
                    success: function(data){
                        let colDiv = $("<div>").addClass("col col-lg-2");
                        let carD = $("<div>").addClass("card text-white bg-primary m-3");
                        let cardBody = $("<div>").addClass("card-body");
                        let cardTitle = $("<h5>").addClass("card-title").text(new Date);
                        let cardText1 = $("<p>").addClass("card-text").text("Temp: " + data.main.temp)
                        colDiv.append(carD.append(cardBody.append(cardTitle, cardText1)));
                        $("five-day-forecast").append(colDiv);
                    }
                })
            }
        
            
        
    });



