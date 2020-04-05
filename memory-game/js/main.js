const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {console.log("You found a match!");} 
	else {console.log("Sorry, try again.");}
}
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();}
};
flipCard(3);
flipCard(2);


/*
const cardOne = cards[3];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");
*/


