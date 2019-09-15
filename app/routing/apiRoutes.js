var postRequest = function(app, friends){
    app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    console.log("New friend is added")

    console.log(friends);
    var lowest = 100
    var diff = 0;
    var match;
    var picture;
    
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
            picture = friends[i].photo;
            console.log(match);
            console.log('It gets here')
            console.log(picture);
        }
        diff = 0;
    }
    
    res.json({match,picture});

    console.log("This is the lowest" + lowest)
})
}

var getRequest = function(app,friends){
    app.get("/api/friends", function(req,res){
        res.json(friends)
    })
}

module.exports = {
    postRequest,getRequest
}