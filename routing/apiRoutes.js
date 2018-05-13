// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../app/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware

      console.log("Success");
      console.log(req.body)
      // friendsData.push(req.body);
      // res.json(true);
      // waitListData.push(req.body);
      // res.json(false);

      var bestFriend = {
        friendName: "",
        friendPhoto: "", 
        friendDif: 100
      }

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

      // res.send(true)
    //Loop through friends array
    //Compare frriends vs. submitted fata
    //Create var for difference between friend and submitted score
    // If total difference < previous friend then it becomes desireable friend
    // res.send more desireable friend


  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friendsData = [];
  //   waitListData = [];

  //   console.log(friendsData);
  // });
};
