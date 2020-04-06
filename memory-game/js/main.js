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

function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardTable = document.getElementById('game-board');
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardTable.appendChild(cardElement);
	}
}

createBoard();


/*
const cardOne = cards[3];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped king");
*/


