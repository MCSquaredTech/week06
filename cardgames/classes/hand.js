// Cards is an Abstract class that extends hand
import { Cards } from '../classes/cards.js'

// The Hand Class extends the Cards Class and provides 
// functionality for a players hand. Building a hand from the
// dealer, each card is push into the cards collection. buildCollection 
// is the virtual function from Cards to populate the hand. 
// Hand has five read-only Properties
export class Hand extends Cards { 
    constructor() { 
        super(); 
        this.playedCards = [];
    }

    // Virtual Method from Cards to populate the hand. 
    buildCollection(card) {
        this.addCards(card._suit, card._rank, card._value);
    }

    // Five Read-Only Properties - Show Hand, Play Card, Discard, Length 
    // returns the Count of the Hand, and ranking value to determin the winner 
    // of the hand. War is is not scored on card value but rather rank of the card. 
    // Therefore we use the ranking value to determin the winner.  
    get showHand() { 
        return this.cards;
    }

    get playCard() { 
        this.currentCard = this.cards.at(-1);
    }

    get discard() { 
        this.playedCards.push(this.cards.pop());
    }

    get length() { 
        return this.cards.length;
    }

    // Returns the Ranking Value not face value
    get value() { 
        return this.currentCard.rankValue;
    }


}