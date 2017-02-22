'use strict';

var http = require("http");
var URL = require("url");
var router = require("./Module/Router");
var port = 8000;
var buffer = require("./Module/Butffer");

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    if (request.url != 'favicon.ico'){
        var url = URL.parse(request.url);
        var pathName = url.pathname.toString().replace("\/","");
        router[pathName](request, response);
    }
    buffer["buffer1"]();
    buffer["buffer2"]();
}).listen(port);


