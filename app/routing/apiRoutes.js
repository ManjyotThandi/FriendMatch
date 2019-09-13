var postRequest = function(app, friends){
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
}

module.exports = {
    postRequest
}