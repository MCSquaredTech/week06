import { Cards } from '../classes/cards.js';

let expect = chai.expect;
let assert = chai.assert;

let cards = new Cards()
cards.addCards("Spades", "King", 10);

// Test the Properties and Methods of the Cards Class Collection
describe("ClassCards", function () { 
    describe('#Cards Properties & Method', () => { 
        it("Add a card to the cards collection", function () { 
            cards.addCards("Hearts", "Queen", 10);
            expect(cards.cards.length).to.equal(2);
        });
        it("Set the current Card to the first card in the collection", function () {
            cards.currentCard = cards.cards.at(0);
            expect(cards.currentCard).to.equal(cards.cards.at(0));
        }); 
        it("display the current card", () => { 
            let display = cards.displayCard(); 
            expect(display).to.equal(`King \u2660`);
        })
        it("call the buildCollection Method", () => {
            expect(cards.buildCollection).to.throw(Error, "This is a Virtual Method must be declared in derived class");
        });
    });
});
