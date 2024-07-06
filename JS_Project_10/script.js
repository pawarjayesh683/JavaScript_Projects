let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//rock, paper, scissor
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randIdx = Math.floor(Math.random()*3); // generating random option
    return options[randIdx]
}

    //Draw
const drawGame = () => {
    console.log("game is draw");
    msg.innerHTML = "Game was Draw, play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = `You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // To generate computer choice
    const compChoice = genComputerChoice();

    // if the game is draw
    if(userChoice === compChoice){
        drawGame();
    }
    
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //comp has option of paper and scissor
           userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(`choice was clicked ${userChoice}`);
        playGame(userChoice);
    })
})
