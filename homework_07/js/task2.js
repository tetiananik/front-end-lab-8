var randomNumber, userNumber, statement, prize;
var upperLimit = 5;
var startPrize = 10;
var totalPrize = 0;
var continueToPlay = true;
var continueRound = true;


statement = confirm("Do you want to play a game?");
if (statement == false) {
	console.log("You did not become a millionaire");
} else {
	while (continueToPlay) {
		prize = startPrize;
		randomNumber = Math.floor(((Math.random()* upperLimit) + 1));
		console.log(randomNumber);
		for (var i = 0; i < 3; i++) {
			userNumber = Number(prompt("Guess the number from 0 to " + upperLimit + "\n Attempts left: " + (3-i) + "\n Total prize: " + totalPrize + "\n Possible current prize: " + prize));
			if (randomNumber === userNumber) {
				totalPrize += prize;
				totalPrize = Math.floor(totalPrize);
				console.log("Your prize is " + prize +"$");
				console.log("Your total prize is " + totalPrize +"$");
				continueToPlay = confirm("Do you want to continue");
				if (continueToPlay) {
					upperLimit *= 2;
					startPrize *=3;
				} else {
					console.log("Thank you for a game. Your prize is: ", totalPrize);
				}
				break;
			} else {
				prize = Math.floor(prize/2);
				if (i === 2) {
					console.log("Thank you for a game. Your prize is: ", totalPrize);
					totalPrize = 0;
					startPrize = 10;
					upperLimit = 5;
					continueToPlay = confirm("Do you want to continue");
				}
			}
		}

	}
}
