var friends = require("./app/data/friends.js");
var routes = require("./app/routing/htmlRoutes");
var postRequest = require("./app/routing/apiRoutes")
var express = require("express");
var path = require("path");

// intialize express
var app = express();

var PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
});

// allows you to post data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// for survery homepage loading. Gets exported object from html routes
routes.survey(app)

// for survery homepage loading. Gets exported object from html routes
routes.homePage(app);


// for api routes. Gets exported object from api routes

postRequest.postRequest(app, friends.friends);

// for the display of friends

postRequest.getRequest(app,friends.friends)


