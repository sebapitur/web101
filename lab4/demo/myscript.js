// let myPar = document.getElementsByTagName("p");

// let text = "";

// for (let i = 0; i < myPar.length; i++) {
//     text += myPar[i].textContent + "Am trecut prin el" +  "<br />";
// }

// document.getElementById("final").innerHTML = text;


// let myBluePar = document.getElementsByClassName("first");

// for (let j of myBluePar) {
//     j.style.color = "blue";
// }

/*
    for (ceva i : vector) {
        executa ceva;
    }

    obiect = {fName="ceva1", lName="ceva2", age="ceva3"}

    @keyframes nume {
        0% {

        }
        50% {

        }
        100% {

        }
    }
*/

document.getElementById("header").addEventListener("click", changeText);

function changeText() {
    console.log(this);
    this.innerHTML = "Acesta este textul nou";
}

document.getElementById("header").addEventListener("click", (e) => {
    alert("Ai apasat pe header");
});

// document.getElementById("header").animate([
//     {instructiune: "10%"},
//     {instructiune: "20%"},
//     ...], {
//         duration: 1000 // milisecunde
//         iterations: ..
//     });
// ]);

/* cand apasam tasta space*/
document.getElementById("header").classList.add("animatie");

