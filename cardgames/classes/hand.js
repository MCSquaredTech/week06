// Cards is an Abstract class that extends hand
import { Cards } from '../classes/cards.js'

export class Hand extends Cards { 
    constructor() { 
        super(); 
        this._currentHand = [];
    }

    buildCollection(card) {
        this.addCards(card);
    }

    showHand() { 
        return this.cards;
    }

    playCard() { 
        return this.currentCard;
    }

}