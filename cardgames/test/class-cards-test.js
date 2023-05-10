import { Cards } from '../classes/cards.js';

let expect = chai.expect;
let cards = new Cards()
cards.addCards("Spades", "King", 10);
cards.currentCard = cards.cards[0];

describe("ClassCards", function() { 
    describe("#ClassCards", function() {
        it("Expects to return the Card Suit", function () {
            let x = cards.currentCard.suit;
            expect(x).to.equal("Spades");
        });
        it("Expects to return the Card Rank", function () {   
            let x = cards.currentCard.rank;
            expect(x).to.equal("King");
        }); 
        it("Expects to return the Card Value", function () { 
            let x = cards.currentCard.value;
            expect(x).to.equal(10); 
        });
        it("Expects to return the Card Graphic", function () {
            let x = cards.currentCard.graphic;
            expect(x).to.equal('\u2660');
        });
        it("Expects to retrun the Card Ranking Value", function () {
            let x = cards.currentCard.rankValue;
            expect(x).to.equal(11);
        });
    });
});