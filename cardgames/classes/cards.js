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
    // Cards is dependent on the base class card. 

    constructor() { 
        // collection object of card
        this.cards = []; 
        //private variable that sets the current card
        this._currentCard = null;
    }

    // public function that pushes a card into the cards collection
    addCards(suit, rank, value) {
        this.cards.push( new Card(suit, rank, value)); 
    }

    // is a virutal function that is implemented at the derived calling class
    buildCollection() { 
        throw new Error("This is a Virtual Method must be declared in derived class"); 
    }

    // returns the current card - Property 
    get currentCard() { 
        return this._currentCard;
    }

    // assigns the current card - Property
    set currentCard(value) { 
        this._currentCard = value;
    }

    // returns the rank value for comparisome 
    get rankValue() { 
        return RANKS.indexOf(this.currentCard.rank);
    }

    // calls the display function from card. 
    displayCard() {
        let index = this.cards.indexOf(this.currentCard);
        if (index > -1){
            return this.currentCard.displayCard();
        }
    }

}