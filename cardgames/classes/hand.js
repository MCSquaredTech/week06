// Cards is an Abstract class that extends hand
import { Cards } from '../classes/cards.js'

export class Hand extends Cards { 
    constructor() { 
        super(); 
        this.playedCards = [];
    }

    buildCollection() {
        this.addCards(this.currentCard._suit, this.currentCard._rank, this.currentCard._value);
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


}