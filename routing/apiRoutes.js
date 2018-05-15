// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData = require("../app/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {

      var bestFriend = {
        friendName: "",
        friendPhoto: "", 
        friendDif: 100
      }

      // Algoritm for determining closest friend match
      var submittedData = req.body
      var submittedScores = submittedData.scores
      var difference = null

      for(i = 0; i < friendsData.length; i++) {
        difference = 0
        var currentFriend = friendsData[i]

        for(j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j]
        var currentUserScore = submittedScores[j]
        console.log(currentFriendScore, currentUserScore)
        var total = Math.abs(currentUserScore - currentFriendScore)
        console.log("Total", total)
        difference += total
        }

        console.log("This is differnece",difference)
        if (difference <= bestFriend.friendDif) {
          console.log("This friend is better")
          bestFriend.friendName = currentFriend.friendName
          bestFriend.friendPhoto = currentFriend.friendPhoto
          bestFriend.friendDif = difference
        }

      } 
      friendsData.push(req.body);
      res.json(bestFriend);

  });

};
