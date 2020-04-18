console.log("Up and running!");

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else { 
		alert("Sorry, try again.");
		}
	}

let resetButton = null;

function reset() {
	for (let i = 0; i < cards.length; i++) {
		cardsInPlay.pop();
		document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
	}
	document.getElementById('reset-button').removeChild(resetButton);
	resetButton = null;
};

function createResetButton() {
	resetButton = document.createElement('button');
	resetButton.textContent = "Reset";
	resetButton.setAttribute('type', 'button');
	document.getElementById('reset-button').appendChild(resetButton);
	resetButton.addEventListener('click', reset);
}

function flipCard() {
	let cardID = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}
	if (resetButton == null) {
		createResetButton();
	}
};


let cardElement;

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
};



//const button = document.getElementsByTagName('button')[0];
//button.addEventListener('click', reset);

createBoard();





