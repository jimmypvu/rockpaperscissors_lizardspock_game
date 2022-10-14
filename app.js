//put updateable text elements in a variable
let computerChoiceDisplay = document.querySelector('#computerChoiceText')
let playerChoiceDisplay = document.querySelector('#playerChoiceText')
let resultDisplay = document.querySelector('#resultText')
let resultDesc = document.querySelector('#resultDiv')
let computerChoiceImg = document.querySelectorAll('img')

function imgGenerate(){
    if(computerChoice === "rock"){
    document.querySelector('#modalResult').innerHTML = '<img src="Rock.svg" id="rock" class="button trigger"/>'
}else if(computerChoice ==="paper"){
    document.querySelector('#modalResult').innerHTML = '<img src="Paper.svg" id="paper" class="button trigger"/>'
}else if(computerChoice ==="scissors"){
    document.querySelector('#modalResult').innerHTML = '<img src="Scissors.svg" id="scissors" class="button trigger"/>'
}else if(computerChoice ==="lizard"){
    document.querySelector('#modalResult').innerHTML = '<img src="Lizard.svg" id="lizard" class="button trigger"/>'
}else if(computerChoice ==="spock"){
    document.querySelector('#modalResult').innerHTML = '<img src="Spock.svg" id="Spock" class="button trigger"/>'
}
}

//select all buttons
let possibleChoices = document.querySelectorAll('.button')

//put a smurf on each button to listen for clicks, on click display choice in userChoiceDisplay
possibleChoices.forEach((button)=>button.addEventListener('click',(e)=>{
    playerChoice = e.target.id
    playerChoiceDisplay.innerText = playerChoice
    document.querySelector('.middle').style.visibility = "visible"
    document.querySelector('.wins').style.display = "inline"
    randomize()
    winnerCheck()
    scoreUpdate()
}))

//generate random computer choice
let computerChoices = ["rock", "paper", "scissors", "lizard", "Spock"]
function randomize(){
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    computerChoiceDisplay.innerText = computerChoice
}

//check for winner
function winnerCheck(){
    if(playerChoice===computerChoice){
        resultDesc.innerText = "-"
        document.querySelector('.wins').style.display = "none"
        resultDisplay.innerText = "It's a tie!"
    }else if(playerChoice==="rock" && computerChoice==="scissors"){
        resultDesc.innerText = "rock crushes scissors"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="rock" && computerChoice==="lizard"){
        resultDesc.innerText = "rock crushes lizard"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="paper" && computerChoice==="rock"){
        resultDesc.innerText = "paper covers rock"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="paper" && computerChoice==="Spock"){
        resultDesc.innerText = "paper disproves Spock"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="scissors" && computerChoice==="paper"){
        resultDesc.innerText = "scissors cuts paper"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="scissors" && computerChoice==="lizard"){
        resultDesc.innerText = "scissors decapitates lizard"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="lizard" && computerChoice==="paper"){
        resultDesc.innerText = "lizard eats paper"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="lizard" && computerChoice==="Spock"){
        resultDesc.innerText = "lizard poisons Spock"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="Spock" && computerChoice==="rock"){
        resultDesc.innerText = "Spock vaporizes rock"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="Spock" && computerChoice==="scissors"){
        resultDesc.innerText = "Spock smashes scissors"
        resultDisplay.innerText = "Player "
    }else if(playerChoice==="rock" && computerChoice==="paper"){
        resultDesc.innerText = "paper covers rock"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="rock" && computerChoice==="Spock"){
        resultDesc.innerText = "Spock vaporizes rock"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="paper" && computerChoice==="scissors"){
        resultDesc.innerText = "scissors cuts paper"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="paper" && computerChoice==="lizard"){
        resultDesc.innerText = "lizard eats paper"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="scissors" && computerChoice==="Spock"){
        resultDesc.innerText = "Spock smashes scissors"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="scissors" && computerChoice==="rock"){
        resultDesc.innerText = "rock crushes scissors"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="lizard" && computerChoice==="rock"){
        resultDesc.innerText = "rock crushes lizard"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="lizard" && computerChoice==="scissors"){
        resultDesc.innerText = "scissors decapitates lizard"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="Spock" && computerChoice==="paper"){
        resultDesc.innerText = "paper disproves Spock"
        resultDisplay.innerText = "Computer "
    }else if(playerChoice==="Spock" && computerChoice==="lizard"){
        resultDesc.innerText = "lizard poisons Spock"
        resultDisplay.innerText = "Computer "
}
}

//keep score
let playerScore = 0
let computerScore = 0

function scoreUpdate(){
    if(resultDisplay.innerText.includes("Player ")){
        playerScore += 1
        document.querySelector('#playerScoreText').innerText = playerScore
        resultDisplay.style.color = "rgb(0, 210, 210)";
        playerScore
    }else if(resultDisplay.innerText.includes("Computer ")){
        computerScore += 1
        document.querySelector('#computerScoreText').innerText = computerScore
        resultDisplay.style.color = "rgb(216, 0, 0)";
        computerScore
    }else{
    resultDisplay.style.color = "white";
}  
}

//modal js here
const modal = document.querySelector(".modal");
const trigger = document.querySelectorAll(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    winnerCheck()
    imgGenerate()
    //document.querySelector('#modalResult').innerHTML = '<span id="resultDiv" class="hidden">---</span>'
}

/*function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}*/

trigger.forEach(addEventListener("click", toggleModal));
//closeButton.addEventListener("click", toggleModal);
//window.addEventListener("click", windowOnClick);
