import { Deck } from '../classes/deck.js';
import { Hand } from '../classes/hand.js';
import { Player } from '../classes/player.js';


const deck = new Deck();
deck.buildCollection();
deck.currentCard = deck.shuffledDeck[0];

const hand = new Hand()
// populate hand 
for (let card in deck.shuffledDeck) { 
    if (card % 2 === 0) {
        // hand.currentCard = deck.shuffledDeck[card];
        hand.buildCollection(deck.shuffledDeck[card]);
    } 
}

for(let i = 0; i < 26; i++) {
    hand.playCard;
    console.log(hand.displayCard());
    // console.log(hand.displayCard() + ' ' + hand.currentCard.rankValue);
    hand.discard;
}
// This is a test ground for card game 
let playerName = prompt('What is your name:');
let player1 = new Player(playerName);
let player2 = new Player('Mary.Bot');

let player = null;
for (let card in deck.shuffledDeck) {
    if (card % 2 === 0) { 
        player = player1;
    } else {
        player = player2;
    }
    player.buildCollection(deck.shuffledDeck[card]);
}
player1.playCard;
player2.playCard;
console.log(`${player1.displayCard()} ${player1.value} <> ${player2.displayCard()} ${player2.value}`);
if (player1.value > player2.value) { 
    player1.score += 1;
    console.log("Player 1 win's the hand")
} else if (player2.value > player1.value) {
    player2.score +1
    console.log("Player 2 win's the hand")
} else {
    console.log("The players tied no score")
}
player1.discard;
player2.discard;









