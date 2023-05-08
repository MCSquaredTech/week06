import { Deck } from '../classes/deck.js'


const deck = new Deck();
deck.buildCollection();
console.log(deck.shuffled);
deck.currentCard = deck.shuffled[0];
console.log(deck.currentCard);
console.log(deck.rankValue);
console.log(deck.displayCard());








