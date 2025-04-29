const blBtn = document.querySelector("#bl");
const he = document.querySelector(".he");
const liBtn = document.querySelector("#li");
btn = document.querySelector("button");
blBtn.addEventListener('click', darkMode);
liBtn.addEventListener('click', bright);
function darkMode(){
he.style.backgroundColor = "black";
blBtn.style.display = "none";
liBtn.style.display = "block";
he.style.color = "white";
}
function bright(){
he.style.backgroundColor = "white";
he.style.color = "black";
blBtn.style.display = "block";
liBtn.style.display = "none";
}