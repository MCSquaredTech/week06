import { Deck } from '../classes/deck.js';
import { Hand } from '../classes/hand.js';


const deck = new Deck();
deck.buildCollection();
deck.currentCard = deck.shuffled[0];

const hand = new Hand()
// populate hand 
for (let card in deck.shuffled) { 
    if (card % 2 === 0) {
        hand.currentCard = deck.shuffled[card];
        hand.addCards(hand.currentCard._suit, hand.currentCard._rank, hand.currentCard._value);
    } 
}

for(let i = 0; i < 26; i++) {
    hand.playCard();
    console.log(hand.displayCard() + ' ' + hand.currentCard.rankValue);
    hand.discard();
}








