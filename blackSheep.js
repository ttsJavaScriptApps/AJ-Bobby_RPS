var woolOwners = [
  {
      "master": 1
  },
  {
    "dame": 1
  },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];


var bags = haveYouAnyWool;

function haveYouAnyWool() {
    for (var i = 0; i < woolOwners.length; i++) {
    var totalBags = 0;
    totalBags++;
  }
    return totalBags;
};


function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + totalBags + " bags full");
  }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        people = Object.keys(woolOwners);
        var person = people.toString();
        console.log("one for my " + person);
    }
}
baabaaBlackSheep();
haveYouAnyWool();
