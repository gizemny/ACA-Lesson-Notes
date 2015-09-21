'use strict';

var prompt = require('prompt');

prompt.start()

function compareHands(hand1, hand2) {
  if (hand1 === hand2) {
    return "It's a tie!";
  }

  if (hand1 === 'rock') {
    if (hand2 === 'scissors') {
      return 'Player 1 wins!';
    }
    // If we reach here, player 2 must have dealt paper
    return 'Player 2 wins!';
  }

  if (hand1 === 'paper') {
    if (hand2 === 'rock') {
      return 'Player 1 wins!';
    }
    // If we reach here, player 2 must have dealt paper
    return 'Player 2 wins!';
  }

  if (hand1 === 'scissors') {
    if (hand2 === 'paper') {
      return 'Player 1 wins!';
    }
    // If we reach here, player 2 must have dealt paper
    return 'Player 2 wins!';
  }
}


function acceptableInput(hand) {
  if (hand === 'rock' || hand === 'paper' || hand === 'scissors') {
    // should return true, which will break out of function here
  return true;
  }
  else
  // otherwise return false by default here
  return false;
};

prompt.get(['hand1', 'hand2'], function (error, result) {
  if (acceptableInput(result['hand1']) && acceptableInput(result['hand2'])) {
  console.log(compareHands(result['hand1'], result['hand2']));
  } else {
  console.log('Only "rock", "paper", or "scissors" is acceptable');
}
});