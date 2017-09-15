
// function showCard(){
	
// 	var randomDeck = Math.floor(Math.random() * 52) + 1

// 	var spades = ' of spade'
// 	if(randomDeck <= 13){
// 		randomDeck = spades
// 	}

// 	var club = ' of club'
// 	if(randomDeck <=26 && randomDeck >13){
// 		randomDeck = club
// 	}
// 	var diamond = ' of diamond'
// 	if(randomDeck <= 39 && randomDeck > 26){
// 		randomDeck = diamond
// 	}
// 	var heart = ' of heart'
// 	if(randomDeck <= 52 && randomDeck > 39){
// 		randomDeck = heart
// 	}

// 	var cardNum = Math.floor(Math.random() * 13) + 1
// 	if(cardNum == 10){
// 		cardNum = 'J'
// 	}
// 	if(cardNum == 12){
// 		cardNum = 'Q'
// 	}
// 	if(cardNum == 13){
// 		cardNum = 'K'
// 	}
// 	document.getElementById('show').innerHTML = cardNum + randomDeck 
// }

// create function deal to call a random number of deck of cards.
function toto(){	
	function deal(){
	var card = Math.floor(Math.random() * 52) + 1
	card = card % 13	

	return card
	}

	// deal the first hand
	var card1 = deal()
	var card2 = deal()

	// creating a parameter card to assign a value for the card
	function getValue(card){
		// if the card are face card like J Q K, give them value of 10
		if((card % 13 == 0)||(card % 13 == 11)||(card % 13 == 12)){
			return 10
		}
		// if the face card is Ace, give it the value of 11
		else if(card % 13 == 1){
			return 11
		}
		// value of rest of the cards
		else{
			return card % 13
		}
	}

	// create score function to add up the two cards
	function score(){
		return(getValue(card1) + getValue(card2))

	}

	document.getElementById('show').innerHTML = "you have " + card1 + ' and ' + card2 + ' with the score of ' + score() 
}

document.getElementById('deal').addEventListener('click', toto, false)















