// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {
      friendName: "Billy Anderson",
      friendPhoto: "https://gadgetstouse.com/wp-content/uploads/2017/11/Xiaomi-Redmi-Y1-selfie-sample-daylight.jpg",
      scores:[
        "1",
        "2",
        "5",
        "3",
        "3",
      ],
    },
    {
      friendName: "Sam Johnson",
      friendPhoto: "https://i.redd.it/mgw8nj4naw1z.png",
      scores:[
        "1",
        "5",
        "5",
        "5",
        "3",
      ],
    },
    {
      friendName: "Craig Ferguson",
      friendPhoto: "https://cdni.rbth.com/rbthmedia/images/all/2017/05/28/russia_selfie.jpg",
      scores:[
        "4",
        "4",
        "4",
        "4",
        "4",
      ],
    },
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsData;
  