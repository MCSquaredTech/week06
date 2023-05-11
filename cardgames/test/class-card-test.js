import { Card } from '../classes/card.js';

let expect = chai.expect;
let card = new Card("Spades", "King", 10);

// Test the Properties and Methods of th Card Class
describe("CardClass", function() { 
    describe("#Card Properties & Methods", function() {
        it("Expects to return the Card Suit", function () {
            let x = card.suit;
            expect(x).to.equal("Spades");
        });
        it("Expects to return the Card Rank", function () {   
            let x = card.rank;
            expect(x).to.equal("King");
        }); 
        it("Expects to return the Card Value", function () { 
            let x = card.value;
            expect(x).to.equal(10); 
        });
        it("Expects to return the Card Graphic", function () {
            let x = card.graphic;
            expect(x).to.equal('\u2660');
        });
        it("Expects to retrun the Card Ranking Value", function () {
            let x = card.rankValue;
            expect(x).to.equal(11);
        });
        it("Expects display function to return..", () => { 
            let x = card.displayCard();
            expect(x).to.equal(`King \u2660`);
        });
    });
});