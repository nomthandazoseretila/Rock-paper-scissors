let playerScore = 0;
let computerScore = 0;
let ties = 0;
let gameOver = false;
let gamesPlayed = 0;
let streak = 0 

const choices = ["rock","paper","scissors"];

const images = {
    rock:"images/rock.png",
    paper:"images/paper.png",
    scissors:"images/scissors.png"
}

function playChoiceSound(choice) {
    if (choice === "rock") {
        document.getElementById("rockSound").play();
    }

    if (choice === "paper") {
        document.getElementById("paperSound").play();
    } 

    if (choice === "scissors") {
        document.getElementById("scissorsSound").play();
    }
}

function playWinSound() {
    const sound = document.getElementById("winSound");
    sound.currentTime = 0;
    sound.play();
}
 
function playLoseSound() {
    const sound = document.getElementById("loseSound");
    sound.currentTime = 0;
    sound.play();
}

function playGame(playerChoice){
    
    if(gameOver) return;
    gamesPlayed++;

    const computerChoice =
    choices[Math.floor(Math.random() * 3)];

    playChoiceSound(playerChoice);
    playChoiceSound(computerChoice);

    document.getElementById("playerMove").src = 
    images[playerChoice]; 

    document.getElementById("computerMove").src =
    images[computerChoice];

    let result = "";

    if(playerChoice === computerChoice){

        result = "IT'S A TIE!";
        ties++;

        document.getElementById("ties").textContent = ties;
    }

    else if(
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ){

        result = "YOU WIN!";
        playerScore++;
        streak++;

        document.getElementById("playerScore").textContent =
        playerScore;
        document.getElementById("streak").textContent =
        streak;
        
    }

    else{

        result = "COMPUTER WINS!";
        computerScore++;
        streak = 0
 
        document.getElementById("computerScore").textContent =
        computerScore;
        document.getElementById("streak").textContent =
        streak;

    }
      let winRate = gamesPlayed === 0 ? 0 :
        Math.round((playerScore / gamesPlayed) * 100);
        document.getElementById("winRate").textContent = winRate + "%";

    document.getElementById("resultText").textContent =
    result;
    document.getElementById("gamesPlayed").textContent = gamesPlayed;

    if(playerScore >= 10){
            
        playWinSound();
            
        launchConfetti();
        document.getElementById("resultText").textContent =
        "🎉 YOU ARE THE CHAMPION! 🎉 ";
        
        
        disableGame();
    
    }

    if(computerScore >= 10){
        playLoseSound();

        document.getElementById("resultText").textContent =
        "💻 COMPUTER IS THE CHAMPION!";

        disableGame();
        
    }
}

function launchConfetti(){

    confetti({
        particleCount:250,
        spread:180,
        origin:{ y:0.6 }
    });
}


function disableGame(){
    gameOver = true;
    document.querySelector(".choices").style.pointerEvents = "none";
    document.querySelector(".choices").style.opacity = "0.7";
}



function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("themeBtn");
    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
} 

function newMatch(){

    playerScore = 0;
    computerScore = 0;
    ties = 0;
    gameOver = false;
    streak = 0

    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;
    document.getElementById("ties").textContent = 0;

    document.getElementById("playerMove").src = "images/question.png";
    document.getElementById("computerMove").src = "images/question.png";

    document.getElementById("resultText").textContent =
    "Make Your Move";

    document.querySelector(".choices").style.pointerEvents = "auto";
    document.querySelector(".choices").style.opacity = "1";


    document.getElementById("streak").textContent = 0 ;

}