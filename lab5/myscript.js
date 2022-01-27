let darth = document.getElementsByClassName("darth_vader")[0];
let droid = document.getElementsByClassName("droid")[0];
let text = document.getElementsByTagName("h1")[0];
let scoreTable = document.getElementById("scoreTable");
let score = 0;

document.addEventListener("keydown", characterJump);

function characterJump(pressed) {
    // keycode for space
    if (pressed.keyCode == 32) {
        darth.classList.add("jumpClass");
        setTimeout(() => { darth.classList.remove("jumpClass") }, 2100);
    }
}

function moveDroid() {
    droid.classList.add("moveLeftClass");
    setTimeout(() => { droid.classList.remove("moveLeftClass") }, 3000);
}

function detectCollision() {
    let droidCoords = droid.getClientRects()[0];
    let darthCoords = darth.getClientRects()[0];
    console.log("X " + (darthCoords.right > droidCoords.left));
    console.log("Y " + (darthCoords.bottom > droidCoords.top));
    if (darthCoords.right > droidCoords.left &&
        darthCoords.bottom > droidCoords.top &&
        darthCoords.left < droidCoords.right
        ) {
            alert("coliziune");
            score = -1;
    }
}

setInterval(() => {
    moveDroid()
}, 5000);

setInterval(() => {
    detectCollision()
}, 300);

setInterval(() => {
    score = score + 1;
    scoreTable.innerHTML = "Score: " + score;
}, 1000);