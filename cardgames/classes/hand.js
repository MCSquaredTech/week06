// Cards is an Abstract class that extends hand
import { Cards } from '../classes/cards.js'

export class Hand extends Cards { 
    constructor() { 
        super(); 
        this.playedCards = [];
    }

    buildCollection(card) {
        this.addCards(card._suit, card._rank, card._value);
    }

    showHand() { 
        return this.cards;
    }

    playCard() { 
        this.currentCard = this.cards.at(-1);
    }

    discard() { 
        this.playedCards.push(this.cards.pop());
    }

    length() { 
        return this.cards.length;
    }

    value() { 
        return this.currentCard.rankValue;
    }


}