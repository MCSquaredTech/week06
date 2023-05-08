//Base card 
// A Data Dictionary of Suite Graphics or Graphi  
const suitGraphics = ({'Spades': '\u2660', 'Hearts': '\u2665', 
                        'Diamonds': '\u2666', 'Clubs': '\u2663'});

// a Data Dictionary of Ranking Values 
const cardValues = ([{'rank': '2', 'value': 2}, {'rank': '3', 'value': 3}, {'rank': '4', 'value': 4}, 
                     {'rank': '5', 'value': 5}, {'rank': '6', 'value': 6}, {'rank': '7', 'value': 7}, 
                     {'rank': '8', 'value': 8}, {'rank': '9', 'value': 9}, {'rank': '10', 'value': 10}, 
                     {'rank':'Jack', 'value': 10}, {'rank':'Queen', 'value': 10}, {'rank':'King',  'value': 10}, 
                     {'rank':'Ace', 'value': 11}]);

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

    get suite() { 
        return this._suit;
    }

    get graphic() { 
        return suiteGraphics[this._suit]; 
    }
    
    get rank() { 
        return this._rank;
    }

    get value() { 
        return this._value;
    }
};