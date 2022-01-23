

const http = require("http");
const fs = require("fs")

http.createServer(function (request, response) {
    if (request.method === "GET") {
        response.end("Hello world")
    }
    else if (request.method === "POST") {
        response.end("How are u?")
    }

}).listen(9999);