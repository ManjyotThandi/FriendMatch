var path = require("path");

// takes you to the survey page
var survey = function(app){
    app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})
}


// gets you to the homepage
var homePage = function(app){
    app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
})
}

// sending an object that will be called in server.js
module.exports = {
    survey,
    homePage
}
