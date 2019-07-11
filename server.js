var express = require("express");
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
var friends = require('./app/data/friends.js');
var server = http.createServer(handleRequest);
var http = require("http");
var fs = require("fs");

function handleRequest(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/home.html", function(err, data) {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  
// Starts our server.
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
  });


