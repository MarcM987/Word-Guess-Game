// var input = confirm("Do You have a game save");

var game = {
    name: "HangMan",
    theme: "Technology",
    wins: 0,
    loses: 0,
    guesses: 6,
    wordBank: ["kilobytes","enums", "techno", "html", "script", "machine", "binary", "computers"],
    wordBlanks: "",
    word: "",
    guessCount: 0,
    letter: '',
    lettersGuessed: "",

    letterGuess: function(letter){
        this.letter = letter;
        this.myWord(this.letter);
        ++this.guessCount;
    },

    myWord: function(letter){
        if(this.guessCount == 0){
            this.word = this.wordBank[Math.floor(Math.random()*this.wordBank.length)];
            this.writeBlank(this.word, letter);
        }        
    },

    writeBlank: function(word, letter){
        var wordArry = "";
        for(let i = 0; i < word.length; ++i){
            wordArry += "_";
            document.getElementById("Word").innerHTML += wordArry[i] + " ";
        }
        this.wordBlanks = document.getElementById("Word").innerHTML;
        
    }

    

};

// var gamesave = {
//     wins: 0,
//     loses: 0,
//     currWordIndex: 0,

// };
var trueLet = "";
var won = false;
document.onkeydown = function(event){
    var letter = event.key.toLowerCase();
    game.letterGuess(letter);
    
    if(game.lettersGuessed.indexOf(letter) >= 0){
        alert("You Already Guessed That!");
    }else if(game.word.indexOf(letter) >= 0){
        trueLet += letter;
    }
    else{
        --game.guesses;
        document.getElementById("Guesses").innerHTML = game.guesses;
        game.lettersGuessed += letter + " ";
        document.getElementById("Letters").innerHTML = game.lettersGuessed.toUpperCase();

    }
    if(game.guesses == 0){
        alert("You Lose!");
        ++game.loses;
        game.guesses = 6;
        game.guessCount = 0;
        game.lettersGuessed = "";
        trueLet = "";
        won = false;
        document.getElementById("Score").innerHTML = "Wins: " + game.wins + "<br>Loses: " + game.loses;
        document.getElementById("Word").innerHTML = game.wordBlanks;
        document.getElementById("Guesses").innerHTML = game.guesses;
        document.getElementById("Letters").innerHTML = game.lettersGuessed;
    }

    
    for(let i = 0; i < game.word.length; ++i){
        if(trueLet.indexOf(game.word[i]) >= 0){
            won = true;
        }else{
            won = false;
            
        }
    }
    if(won && trueLet.length == game.word.length){
        alert("You Win!");
        ++game.wins;
        game.guesses = 6;
        game.guessCount = 0;
        game.lettersGuessed = "";
        trueLet = "";
        won = false;
        document.getElementById("Score").innerHTML = "Wins: " + game.wins + "<br>Loses: " + game.loses;
        document.getElementById("Word").innerHTML = game.wordBlanks;
        document.getElementById("Guesses").innerHTML = game.guesses;
        document.getElementById("Letters").innerHTML = game.lettersGuessed;
    }

    console.log(game.word);
    if(game.word.indexOf(letter) >= 0){
        document.getElementById("Word").innerHTML = "";
        for(let i = 0; i < game.word.length; ++i){
            if(game.word.indexOf(letter) == i){
                document.getElementById("Word").innerHTML += letter;
            }else{
                document.getElementById("Word").innerHTML += " _ ";
            }
        }
    }

    
};
