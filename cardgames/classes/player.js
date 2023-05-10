// Player is dependent on the Hand class 
import { Hand } from './hand.js';

// The player class extends the hand class 
// The player class has a player name, score and high score if you track 
// multiple games. There three Read-Write Properties Name, Score, and HighScore 
export class Player extends Hand { 
    constructor(name) { 
        super();
        // Pirvate varaibles
        this._name = name;
        this._score = 0;
        this._highScore = 0; 
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
