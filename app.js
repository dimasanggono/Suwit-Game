const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generatecomputerChoice();
    getResult();
  })
);

function generatecomputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // can use possibleChoices.length
  if (randomNumber === 1) {
    computerChoice = "batu";
  }
  if (randomNumber === 3) {
    computerChoice = "kertas";
  }
  if (randomNumber === 2) {
    computerChoice = "gunting";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its draw";
  }
  if (computerChoice === "batu" && userChoice == "kertas") {
    result = "you win!";
  }
  if (computerChoice === "batu" && userChoice == "gunting") {
    result = "you lose!";
  }
  if (computerChoice === "kertas" && userChoice == "gunting") {
    result = "you win!";
  }
  if (computerChoice === "kertas" && userChoice == "batu") {
    result = "you lose!";
  }
  if (computerChoice === "gunting" && userChoice == "batu") {
    result = "you win!";
  }
  if (computerChoice === "gunting" && userChoice == "kertas") {
    result = "you lose!";
  }
  resultDisplay.innerHTML = result;
}
