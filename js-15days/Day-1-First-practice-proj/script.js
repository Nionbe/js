let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guesses.focus();
function checkGuess() {
   const userGuess = Number(guessField.value);
   if(userGuess === 1){
guesses.textContent = "Previous guesses: "
   }

   guesses.textContent = `${guesses.textContent} ${userGuess}|`;
  
   if(userGuess === randomNumber){
    lastResult.textContent = "Congraulation";
    lastResult.style.color = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if(guessCount === 10){
    lastResult.textContent = "!!!Game Over Fool!!!";
    lastResult.style.backgroundColor = "red";
    lowOrHi.textContent = "";
    setGameOver();
  }else {
    lastResult.textContent = "Wrong!!!";
    lastResult.style.color = "black";
    if(userGuess < randomNumber){
        lowOrHi.textContent = "Too Low!";
    }else if(userGuess > randomNumber){
        lowOrHi.textContent = "Too High!!"
    }
    
  }
guessCount++;
  guessField.value = "";
  guessField.focus();
}
  
guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;        guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}
function resetGame(){
  guessCount = 1;
  const resetParas = document.querySelectorAll(".result p");

  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
guessField.disabled = false;
guessSubmit.disabled = false;
guessField.value ="";
guessField.focus();

lastResult.style.body.backgroundcolor = "white";
 
randomNumber = Math.floor(Math.random() * 100) + 1;
}