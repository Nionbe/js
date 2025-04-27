let winCount = 0;

const count = document.querySelector(".count");
const cont = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const btn = document.querySelector('.buttons');
function play(userChoice){
    const choices = ["rock", "scissors", "paper"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
let outcome = '';

if( 
    (userChoice === 'rock'&& computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
){
    outcome= "You WINNN!!!";
    ans.style.color ="green";
    winCount ++;
} else if (
    userChoice === computerChoice
){
    outcome = "IT's A Tie!!";
    ans.style.color ="orange";
}else{
    outcome = "Computer wins!!!!";
    ans.style.color ="Crimson";
     }
document.getElementById('result').textContent =
`You chose ${userChoice} And Computer chose ${computerChoice}`;
document.getElementById('ans').textContent =
`${outcome}`;
if(count){
    count.textContent =`ur score: ${winCount}`;
    count.style.display='block';
}
if(winCount === 5){
    

    document.getElementById('result').textContent =``;
  ans.textContent = "ok stop!";
   btn.style.display ='none';
    resetBtn.style.display = 'block';
}
}
resetBtn.addEventListener('click', function(){
    winCount = 0 ;
    btn.style.display = 'block';
    resetBtn.style.display = 'none';
    count.textContent = `Score: ${winCount}`;
    ans.textContent = '';
    document.getElementById('result').textContent = '';
    
    btn.style.display = 'flex';
btn.style.justifyContent = 'center';
btn.style.gap = '10px';
btn.style.flexWrap = 'nowrap';

});
