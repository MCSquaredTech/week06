// Base Class Card 
// A Data Dictionary of Suite Graphics or Graphi  
const suitGraphics = ({'Spades': '\u2660', 'Hearts': '\u2665', 
                        'Diamonds': '\u2666', 'Clubs': '\u2663'});

// thirteen cards by Rank - array 
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 
                    'Jack', 'Queen', 'King', 'Ace'];

export class Card { 
    // Card is the base class/object for cards - a card 
    // has four suite (spades, hearts, diamonds, clubs)  
    // has thirteen cards' ranked (2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace) 
    // in some card games ace can be 11 or 1 which ever benefits the player
    // has a value (2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, and sometime 1)
    // and a graphical representation ('\u2664, \u2465, \u2666, \u2667)
    // Ranking value can be found by the indexOf(rankCollection).
    
    constructor(suit, rank, value) { 
        this._suit = suit; 
        this._rank = rank; 
        this._value = value;
    }
    // five read-only properties Suit, Graphics (the suit graphic), Rank, Rank Value, Value
    get suit() { 
        return this._suit;
    }

    get graphic() { 
        return suitGraphics[this.suit]; 
    }
    
    get rank() { 
        return this._rank;
    }
    
    // returns the rank value for comparisome in War Card Game
    get rankValue() { 
        return RANKS.indexOf(this.rank);
    }

    get value() { 
        return this._value;
    }

    // One method that displays the card with the suit graphic 
    displayCard() {
        return `${this.rank} ${this.graphic}`;
    }
};