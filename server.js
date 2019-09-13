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


var friends = [{
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4
      ]
  },
{
    
        "name":"Sandy",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            2,
            4,
            4
          ]
      }
,
{
    "name":"Jen",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        1,
        1,
        4
      ]
  }]

// gets you to the homepage
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/home.html"))
})

// takes you to the survey page
app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "app/public/survey.html"))
})

app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    console.log("New friend is added")

    console.log(friends);
    // send it back to front end so it will console.log on ui
    var lowest = 100
    var diff = 0;
    var match;
    
    // logic to compare the values
    for(i=0; i < friends.length; i++){
        for(a=0; a < friends[i].scores.length; a++){
            diff += Math.abs(friends[i].scores[a]) - Math.abs(newFriend.scores[a]) 
            console.log("----should be adding the diff for first person then reset")
            console.log(Math.abs(diff));
        }
        if (Math.abs(diff) < lowest){
            lowest = diff;
            match = friends[i].name;
            console.log(match);
        }
        diff = 0;
    }
    
    res.json(match);
    console.log("This is the lowest" + lowest)
})