var hands = ['rock','paper', 'scissors']
function getHand(hands) {
  return hands[parseInt(Math.random()*10)%3]
}
// console.log(getHand(hands));
var player1 = {
  name: 'Bobby'
}
var player2 = {
  name: 'Skip',
  getHand: getHand
}
function playRound(player1, player2) {
  console.log("player 1 chooses " + prompt('pick rock, paper, or scissors.'));
  console.log("player 2 chooses " + player2.getHand(hands));
}
console.log(playRound(player1, player2));
// function playRound(player1,player2) {
//   var hand1 = getHand();
//   var hand2 = getHand();
//   var player1Win = 0;
//   var player2Win = 0;
//   console.log(player1.name + " throws " + hand1 + "! " + player2.name + " throws " + hand2 + "!");
//   if ( hand1===hand2 ) {
//      var winner = "It's a tie!"
//   } else if ((hand1=="scissors" && hand2=="paper") || (hand1=="rock" && hand2=="scissors") || (hand1=="paper" && hand2=="rock")) {
//       var winner = player1.name + " wins!";
//       player1.wins++
//   }  else {
//       var winner = player2.name + " wins!";
//       player2.wins++ }
//     console.log(winner);
//     return winner
//   }
