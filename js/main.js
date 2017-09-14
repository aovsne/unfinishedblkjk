// function twoRandomScore(){
// 	var score1 = Math.floor(Math.random() * 10)
// 	var score2 = Math.floor(Math.random() * 10)

// 	return score1 + score2

// }
// console.log(twoRandomScore())
function showCard(){
	
	var randomDeck = Math.floor(Math.random() * 52) + 1

	var spades = ' of spade'
	if(randomDeck <= 13){
		randomDeck = spades
	}

	var club = ' of club'
	if(randomDeck <=26 && randomDeck >13){
		randomDeck = club
	}
	var diamond = ' of diamond'
	if(randomDeck <= 39 && randomDeck > 26){
		randomDeck = diamond
	}
	var heart = ' of heart'
	if(randomDeck <= 52 && randomDeck > 39){
		randomDeck = heart
	}

	var cardNum = Math.floor(Math.random() * 13) + 1
	if(cardNum == 10){
		cardNum = 'J'
	}
	if(cardNum == 12){
		cardNum = 'Q'
	}
	if(cardNum == 13){
		cardNum = 'K'
	}
	document.getElementById('show').innerHTML = cardNum + randomDeck 
}











