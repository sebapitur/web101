let hero = document.getElementsByClassName("fixed_image")[0];
let button = document.getElementsByTagName("button")[0];
let text = document.getElementsByTagName("h1")[0];

window.onload = function(){
    alert("Ai intrat pe a patra pagina");
}

document.addEventListener("keydown", characterJump);

function characterJump(pressed) {
    // keycode for space
    if (pressed.keyCode == 32) 
    {
        hero.classList.add("jumpClass");
        setTimeout(()=>{hero.classList.remove("jumpClass")}, 2100);
    }
}

document.addEventListener("click", displayText);

function displayText() {
    document.getElementById("displayedText").innerHTML = "This is the displayed text";
}

document.addEventListener("click", changeText);

function changeText() {
    text.innerHTML = "Changed Text";
}