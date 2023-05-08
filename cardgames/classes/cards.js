// Card is a dependency to the Cards Class
import { Card } from './card.js';

// Four suite card array - array
const SUITS = ['Spades', 'Hearts', 'Diamonds', 'Clubs']; 

// thirteen cards by Rank - array 
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 
                    'Jack', 'Queen', 'King', 'Ace'];
// Card Value by Rank - array 
const VALUE = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

export class Cards { 
    // Cards is an array of cards: it is a sub class for deck, 
    // hand, or anyother collection of cards. 
    // Cards inherits from the base class card. 

    constructor() { 
        
        this.cards = []; 
        this._currentCard = null;
    }

    addCards(suit, rank, value) {
        this.cards.push( new Card(suit, rank, value)); 
    }

    buildCollection() { 
        throw new Error("This is a Virtual Method must be declared in derived class"); 
    }

    get currentCard() { 
        return this._currentCard;
    }

}