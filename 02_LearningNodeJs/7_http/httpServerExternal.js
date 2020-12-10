var http = require('http');
var url = require('url');
var qstring = require('querystring');
var APIKEY = '4acabdce61f659cef8cb1a9dd79507d9';

function sendResponse(weatherData, res){
    var page =
    `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
</head>
<body>
    <form method="post">
        City: <input name="city"><br>
        <input type="submit" value="Get Weather">
    </form>
    <h1>Weather info</h1>
    <p>${JSON.stringify(weatherData, null, "<br>")}</p>
</body>
</html>
    `;
    res.end(page);
}

function parseWeather(weatherResponse, res){
    var weatherData = '';
    weatherResponse.on('data', function(chunk){
        weatherData += chunk;
    });

    weatherResponse.on('end', function(){
        sendResponse(weatherData, res);
    });
}

function getWeather(city, res){
    city = city.replace(' ', '-');
    console.log(city);
    var options = {
        host: 'api.openweathermap.org', 
        path: '/data/2.5/weather?q=' + city +'&units=metric'+ '&APPID=' + APIKEY
    };

    http.request(options, function(weatherResponse){
        parseWeather(weatherResponse, res);
    }).end();
}

http.createServer(function(req, res){
    console.log(req.method);
    if(req.method == "POST"){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            var postParams = qstring.parse(reqData);
            console.log(JSON.stringify(postParams));
            getWeather(postParams.city, res);
        });
    } else {
        sendResponse(null, res);
    }
}).listen(8080, ()=> {
    console.log("Server run at port 8080")
});

