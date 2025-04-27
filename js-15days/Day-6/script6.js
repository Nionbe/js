function play(userChoice){
    const choices = ["rock", "scissors", "paper"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
let outcome = '';
if( 
    (userChoice === 'rock'&& computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
){
    outcome = "You WINNN!!!";
} else if (
    userChoice === computerChoice
){
    outcome = "IT's A Tie!!";
}else{
    outcome = "Computer wins!!!!";
}
document.getElementById('result').textContent =
`You chose ${userChoice} And Computer chose ${computerChoice} So ${outcome}`;
}