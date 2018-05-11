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
      response1: "4",
      response2: "3",
      response3: "3",
      response4: "3",
      response5: "3",
    },
    {
      friendName: "Sam Johnson",
      friendPhoto: "https://i.redd.it/mgw8nj4naw1z.png",
      response1: "4",
      response2: "2",
      response3: "4",
      response4: "5",
      response5: "3",
    },
    {
      friendName: "Craig Ferguson",
      friendPhoto: "https://unbox-seohacker.netdna-ssl.com/wp-content/uploads/2017/08/ASUS-ZenFone-4-Selfie-26.jpg",
      response1: "4",
      response2: "3",
      response3: "2",
      response4: "4",
      response5: "3",
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsData;
  