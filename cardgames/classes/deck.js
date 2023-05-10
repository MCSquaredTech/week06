// Cards is an Abstract class that extends Deck
import { Cards } from '../classes/cards.js';

// Four suite card array - array
const SUITS = ['Spades', 'Hearts', 'Diamonds', 'Clubs']; 

// thirteen cards by Rank - array 
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 
                    'Jack', 'Queen', 'King', 'Ace'];
// Card Value by Rank - array 
const VALUE = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

// Deck extends the Cards Class and handles basic Card Deck Funtions 
// to build the Deck of Cards - buildCollection Populates and controls the data 
// for the Suit, Rank, and Value to Create the Card and Populate the Cards Collection 
// ShuffleDeck is a private shuffles the cards. 
export class Deck extends Cards { 
    constructor(){
        super()
        this._shuffled = [];
    }

    // two methods to populate the deck of cards and shuffle 
    buildCollection() {
        for (let s = 0; s < SUITS.length; s++) { 
            for (let rv = 0; rv < RANKS.length; rv++) { 
                this.addCards(SUITS[s], RANKS[rv], VALUE[rv]);
            }
        }
        this._shuffled = this._shuffledDeck();
    }

    _shuffledDeck() {
        let shuffled = this.cards.slice();
        for (let i = 0; i < 8; i++) {
            shuffled.sort((a,b) => .5 - Math.random())
        };

        return shuffled;
    }     
    
    // read-only property Shuffled Deck 
    get shuffledDeck() {
        return this._shuffled; 
    }
}