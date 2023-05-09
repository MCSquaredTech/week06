import { Cards } from '../classes/cards.js';

let expect = chai.expect;
let cards = new Cards("Spades", "King", 10);
cards.currentCard = cards[0];

describe("CardsClass", function() { 
    describe("#classCards", function() {
        it("Expects to return the Card Suit", function () {
            let x = cards.currentCard.suit;
            expect(x).to.equal("Spades");
        });
        it("Expects to return the Card Rank", function () {   
            let x = card.currentCard.rank;
            expect(x).to.equal("King");
        }); 
        it("Expects to return the Card Value", function () { 
            let x = card.currentCard.value;
            expect(x).to.equal(10); 
        });
        it("Expects to return the Card Graphic", function () {
            let x = card.currentCard.graphic;
            expect(x).to.equal('\u2660');
        });
        it("Expects to retrun the Card Ranking Value", function () {
            let x = card.currentCard.rankValue;
            expect(x).to.equal(11);
        });
    });
});