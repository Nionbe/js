
const button = document.querySelector("button");
const inputText = document.querySelector("input")
 function greet(){
const greeting = document.querySelector("#greeting .one");
greeting.textContent = `Hello!! ${inputText.value}.`;
const one = document.querySelector(".one");
const onlyLetters = /^[A-Za-z\s]+$/;
if(!onlyLetters.test(inputText.value)){
    greeting.style.backgroundColor = "red";
greeting.textContent = `no numbers only names`;
    one.textContent = "your name !!!!"
}else{
    greeting.style.backgroundColor = "green";
greeting.textContent = `Hello!! ${inputText.value}.`;
}
 }
 button.addEventListener("click", greet);
