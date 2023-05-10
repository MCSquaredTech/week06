import { Deck } from '../classes/deck.js'; 
import { Player } from '../classes/player.js';

// Instantiate a Deck of Playing Cards. 
const deck = new Deck(); 
deck.buildCollection(); 

// Get the Player 1's name and Instantiate the Player object 
let name = prompt("What is your name?");
const player1 = new Player(name); 
const player2 = new Player('Mary D CompuBot'); 

// Deal the cards to Player1 and Player2
let player = null;
for (let card in deck.shuffledDeck) {
    if (card % 2 === 0) { 
        player = player1;
    } else {
        player = player2;
    }
    player.buildCollection(deck.shuffledDeck[card]);
}

// Game Play is in the console window 
alert("Game Play Results in the Console Window! \n Press Ok to Play!")
let tied = 0
// Let play war - Begin the Game!
for (let i = 0; i < 26; i++) { 
    player1.playCard;
    player2.playCard;
    console.log(`${player1.displayCard()}  <> ${player2.displayCard()} `);
    // Calculate the winning hand.
    if (player1.value > player2.value) { 
        player1.score += 1;
        console.log(`${player1.name} win's the hand`)
    } else if (player2.value > player1.value) {
        player2.score += 1
        console.log(`${player2.name} win's the hand`)
    } else {
        console.log("The players tied - no score")
        tied +=1
    }
    player1.discard;
    player2.discard;
}

// Display the Players Scores 
console.log(`${player1.name} ${player1.score} <> ${player2.name} ${player2.score} and Tied Hands ${tied}`);
if (player1.score > player2.score) { 
    console.log(`${player1.name} Wins the Game!`);
    alert(`${player1.name} Wins the Game!`);
} else if (player2.score > player1.score) { 
    console.log(`${player2.name} Wins the Game!`);
    alert(`${player2.name} Wins the Game!`);
} else {
    console.log(`${player1.name} and ${player2.name} Tied`);
    alert(`${player1.name} and ${player2.name} Tied`);
}

// End the Game of War - War! H'uh! What is it good for? Absolutely Nothing! Say it again!