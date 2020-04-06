const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png",
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"	
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png",
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png",
}
];

const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");} 
	else {alert("Sorry, try again.");}
};

function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
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


