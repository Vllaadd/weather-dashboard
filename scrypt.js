$(document).ready(function(){
    var apiKey = "166a433c57516f51dfab1f7edaed8413";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

    $(document).ready(function(){

// click button 
        $("#submit").click(function(){
            getWeather();
            var userInput = $("#user-input").val();
        })


// current forecast 
            function getWeather(){
                var city = $("#input").val();
            $ajax({
                url: url,
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    $("#city").html(data.name + "," + data.sys.country);
                }
            })
            }
            
        
    })


   





});

