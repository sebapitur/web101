let continut = document.getElementsByClassName("continutul")[0];
let input_div = document.getElementsByClassName("input_div")[0];
let input = input_div.children[1];
let checkAllButton = input_div.children[0];
let filterTab = document.createElement("div");

filtertabInitialize()

checkAllButton.addEventListener("click", checkAllItems);
document.addEventListener("keydown", detectNewText);

function all_button_function() {
    for (let i = 1; i < continut.children.length - 1; i = i + 1) {
        continut.children[i].hidden = false;
    }

    continut.children[continut.children.length - 1].children[0].innerHTML =
                     continut.children.length - 2 + " in total";
}

function active_button_function() {
    let count = 0;

    for (let i = 1; i < continut.children.length - 1; i = i + 1) {
        if (continut.children[i].children[1].style.opacity == 0.3) {
            continut.children[i].hidden = true;
        } else {
            continut.children[i].hidden = false;
            count = count + 1;
        }
    }

    continut.children[continut.children.length - 1].children[0].innerHTML =
                     count + " active";
}

function completed_button_function() {
    let count = 0;

    for (let i = 1; i < continut.children.length - 1; i = i + 1) {
        if (continut.children[i].children[1].style.opacity != 0.3) {
            continut.children[i].hidden = true;
        } else {
            continut.children[i].hidden = false;
            count = count + 1;
        }
    }

    continut.children[continut.children.length - 1].children[0].innerHTML =
                     count + " completed";
}

function clear_completed_function() {
    for (let i = 1; i < continut.children.length - 1; i = i + 1) {
        if (continut.children[i].children[1].style.opacity == 0.3) {
            continut.removeChild(continut.children[i]);
            i--;
        }
    }

    continut.children[continut.children.length - 1].children[4].hidden = true;
    recountTodos();
}

function checkAllItems() {
    allCheckedAlready = true;
    for (let i = 1; i < continut.children.length - 1; i = i + 1) {
        if (continut.children[i].children[1].style.opacity != 0.3) {
            allCheckedAlready = false;
        }
    }

    if (allCheckedAlready == false) {
        for (let i = 1; i < continut.children.length - 1; i = i + 1) {
            checkButtonPress(continut.children[i]);
        }
    } else {
        for (let i = 1; i < continut.children.length - 1; i = i + 1) {
            continut.children[i].children[1].style.textDecoration = "";
            continut.children[i].children[1].style.opacity = 1;
        }
    }
}

function detectNewText(key) {
    if (key.keyCode == 13) { // enter ascii code
        if (document.activeElement == input) {
            let newChild = document.createElement("div");
            let inputElement = document.getElementsByClassName("input_mare")[0];

            assignChild(newChild, inputElement.value, continut.children.length);
            inputElement.value = "";
            if (continut.children.length > 1) {
                continut.removeChild(continut.lastChild);
            }
            continut.appendChild(newChild);
            continut.appendChild(filterTab);
            filterTab.children[0].innerHTML = continut.children.length - 2 + " in total";
        }
    }
}

function assignChild(newChild, inputVal, index) {
    newChild.setAttribute("class", "input_box");
    
    let checkButton = document.createElement("button");
    checkButton.setAttribute("class" , "check_individual");
    checkButton.addEventListener("click", () => {
        checkButtonPress(checkButton.parentElement);
    });

    let checkButtonImage = document.createElement("i");
    checkButtonImage.setAttribute("class", "fa fa-check-circle-o fa-lg");
    checkButtonImage.setAttribute("aria-hidden", "true");

    checkButton.appendChild(checkButtonImage);

    let closeButton = document.createElement("button");
    closeButton.setAttribute("class" , "close_button");
    closeButton.addEventListener("click", () => {
        closeButtonPress(closeButton.parentElement);
    });

    let closeButtonImage = document.createElement("i");
    closeButtonImage.setAttribute("class", "fa fa-window-close fa-lg");
    closeButtonImage.setAttribute("aria-hidden", "true");

    closeButton.appendChild(closeButtonImage);

    let text = document.createElement("p");
    text.setAttribute("class", "introduced_text");
    text.innerHTML = inputVal;

    newChild.appendChild(checkButton);
    newChild.appendChild(text);
    newChild.appendChild(closeButton);  
}

function checkButtonPress(parent) {
    console.log(parent);
    parent.children[1].style.opacity = 0.3;
    parent.children[1].style.textDecoration = "line-through";
    continut.children[continut.children.length - 1].children[4].hidden = false;
}

function closeButtonPress(parent) {
    continut.removeChild(parent);
    if (continut.children.length == 2) {
        continut.removeChild(continut.lastChild);
    }
    recountTodos();
}

function recountTodos() {
    if (continut.children.length - 2 >= 0) {
        continut.children[continut.children.length - 1].children[0].innerHTML =
        continut.children.length - 2 + " in total";
    }
}

function filtertabInitialize() {
    filterTab.setAttribute("class", "filter_tab");

    filterTab.appendChild(document.createElement("p"));
    filterTab.children[0].setAttribute("class", "todo_description");

    filterTab.appendChild(document.createElement("button"));
    filterTab.children[1].innerHTML = "All";
    filterTab.children[1].setAttribute("class", "all_button");
    filterTab.children[1].addEventListener("click", all_button_function);

    filterTab.appendChild(document.createElement("button"));
    filterTab.children[2].innerHTML = "Active";
    filterTab.children[2].setAttribute("class", "active_button");
    filterTab.children[2].addEventListener("click", active_button_function);

    filterTab.appendChild(document.createElement("button"));
    filterTab.children[3].innerHTML = "Completed";
    filterTab.children[3].setAttribute("class", "completed_button");
    filterTab.children[3].addEventListener("click", completed_button_function);
    
    filterTab.appendChild(document.createElement("button"));
    filterTab.children[4].setAttribute("class", "clear_completed_button");
    filterTab.children[4].addEventListener("click", clear_completed_function);
    filterTab.children[4].innerHTML = "Clear completed";
    filterTab.children[4].hidden = true;
}


