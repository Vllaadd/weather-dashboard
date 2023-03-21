var apiKey = "166a433c57516f51dfab1f7edaed8413";
let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

$(document).ready(function(){
    console.log("Document loaded.");
// click button•••••••••••••••••••••••••••••••••••••••••••
        $("#submit").click(function(){
            getWeather();
            fiveDayForecast();
        });

// current forecast•••••••••••••••••••••••••••••••••••••••
            function getWeather(){
                var city = $("#input").val();
            $.ajax({
                url: url,
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log("Ajax is not defined.");
                    $("#city").html(data.name + " , " + data.sys.country);
                    $("#temp").html(data.main.temp);
                    $("#humidity").html(data.main.humidity);
                    $("#wind").html(data.wind);
                }
            });
        };

// five day forecast•••••••••••••••••••••••••••••••••••••• 
            function fiveDayForecast(){
                $.ajax({
                    url: url,
                    dataType: "json",
                    type: "GET",
                    success: function(data){
                        for(var i=0; i<data.list.length; i++){

                        }
                    }
                })
            }
        
            
        
    });



