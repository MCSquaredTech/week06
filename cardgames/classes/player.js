// Play is dependent on Hand 
import { Hand } from '../classes/hand.js';

export class player { 
    constructor(name) { 
        // Pirvate varaibles
        this._name = name;
        this._score = 0;
        this._highScore = 0; 
        // public Hand Object 
        this.hand = Hand();
    }

    get name() { 
        return this._name;
    }

    get score() { 
        return this._score; 
    }

    set score(value) { 
        this._score = value;
    }

    get highScore() { 
        return this._highScore;
    }
    
    set highScore(value) { 
        this._highScore = value;
    }


}
