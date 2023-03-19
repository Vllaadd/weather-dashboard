var apiKey = "166a433c57516f51dfab1f7edaed8413";

$(document).ready(function(){
    console.log("Document loaded.");
// click button 
        $("#submit").click(function(){
            getWeather();
        });

// current forecast 
            function getWeather(){
                var city = $("#input").val();
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey,
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    console.log("Ajax is not defined.");
                    $("#city").html(data.name + " , " + data.sys.country);
                }
            });
        };

            
        
            
        
    });



