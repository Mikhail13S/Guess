 var userText = document.getElementById("user-text");

  var game = {
  theLetter: null,
  userGuess: null,
  guessArray: [],
  guessTotal: 9,
  guessesLeft: this.guessTotal,  
  gamesToPlay: 3,
  gamesLeft: this.gamesToPlay,
  wins: 0,
  losses: 0,
  endOfGame: false,
  endOfSeries: false,
  

  initialize: function() {

    console.log("Initializing the Game");
    this.reset();
    this.gamesToPlay = 3;
    this.gamesLeft = this.gamesToPlay;    
    this.wins = 0;
    this.losses = 0;
    this.endOfGame = false;
    this.endOfSeries = false;
    console.log("computerLetter: " + this.theLetter);
  },

  reset: function() {
    console.log("Resetting the Game Properties");
    this.pickLetter();    
    this.userGuess = null;
    this.guessArray = [];
    this.guessTotal = 9;
    this.guessesLeft = this.guessTotal;
    this.endOfGame = false;
  },

  processGuess: function(guess) {
    this.userGuess = guess;
    this.guessArray.push(guess);
    this.guessesLeft--;

    if (this.userGuess===this.theLetter) {
      this.endOfGame = true;
      this.wins++;

      alert("You WIN!");
      this.updateGame();
    }
    else if (this.guessesLeft=== 0) {
      this.endOfGame = true;
      this.losses++;

      alert("Sorry - you are out of guesses.");
      this.updateGame();
    }
   
    console.log(this);
  },

  updateGame: function() {
    console.log("Updating the game logic.");
    this.gamesLeft--;
    if (this.gamesLeft===0) {
      this.endOfSeries = true;
      this.initialize();
      alert("Games Finished\nPress any key to start again.");
    }
    this.reset();    
    console.log(this.gamesLeft);
    console.log(this);
  },

  showData: function() {
    console.log(this);
  },

  pickLetter: function() {
    console.log("Picking a letter");
    var letterA = 'a';
    var randomOffset = Math.floor(Math.random() * 26);
    this.theLetter = String.fromCharCode(letterA.charCodeAt(0) + randomOffset);    
    console.log("theLetter: " + this.theLetter);
  }

};

var updateGameDisplay = function (game) {
    var data;

    data = game.gamesLeft;
    document.getElementById("games-left").innerHTML = "Games Left to Play: " + data;

    data = game.wins;
    document.getElementById("wins").innerHTML = "Wins: " + data;

    data = game.losses;
    document.getElementById("losses").innerHTML = "Losses: " + data;

    data = game.guessesLeft;
    document.getElementById("guesses-left").innerHTML = "Guesses Left: " + data;

    data = game.guessArray;
    document.getElementById("guesses").innerHTML = "Your Guesses So Far: " + data;
};

game.initialize();

function bodyLoad() {
  updateGameDisplay(game);
};

document.onkeyup = function(event) {
  userText.textContent = event.key;
  console.log(event);
  console.log(event.key);


  switch(event.key) {
    case("1"):
      game.pickLetter();
      break;     
    case("2"):
      game.initialize();
      break;
    case("3"):
      game.reset();
      break;    
    case("4"):
      game.processGuess(event.key);
      break;    
    case("5"):
      game.updateGame(event.key);
      break;    
    case("6"):
      game.showData(event.key);
      break;

    default:
      game.processGuess(event.key);
      console.log(this);
      break;
  };
  updateGameDisplay(game);
};