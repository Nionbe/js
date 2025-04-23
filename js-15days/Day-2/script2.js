
const btn = document.querySelector("button");
const txt = document.querySelector("p");




btn.addEventListener("click", updateBtn);



function updateBtn(){
    if(btn.textContent === "Start machine"){
        btn.textContent = "Stop the machine"; 
        txt.textContent = "The machine has started!!";
        btn.style.backgroundColor = "green";
        txt.style.backgroundColor = "green";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine Stopped.";
        btn.style.backgroundColor = "red";
        txt.style.backgroundColor = "red";
    }
}