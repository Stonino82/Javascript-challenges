var allButtons = document.getElementsByTagName('button'); //devuelve un NodeList o HTMLCollection (se parece a un Array)


//me guardo los valores actuales en un array
var allButtons_copy = [];
for (let i = 0; i < allButtons.length; i++) {
    allButtons_copy.push(allButtons[i].classList[1]);
}


//Main function: this function run all the others secondaty functions below
function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        console.log(buttonThingy);
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'blue') {
        buttonsBlue();
    } else if (buttonThingy.value === 'yellow') {
        buttonsYellow();
    } else if (buttonThingy.value === 'reset') {
        buttonsReset();
    } else if (buttonThingy.value === 'random') {
        buttonsRandom();
    }
}


function buttonsRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]); //for every button get the classList and remove the second class (classList[1]) from every button (allButtons[i])
        allButtons[i].classList.add('btn-red')
    }
}

function buttonsGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]); //for every button get the classList and remove the second class (classList[1]) from every button (allButtons[i])
        allButtons[i].classList.add('btn-green')
    }
}

function buttonsBlue() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]); //for every button get the classList and remove the second class (classList[1]) from every button (allButtons[i])
        allButtons[i].classList.add('btn-blue')
    }
}

function buttonsYellow() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]); //for every button get the classList and remove the second class (classList[1]) from every button (allButtons[i])
        allButtons[i].classList.add('btn-yellow')
    }
}

function buttonsReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(allButtons_copy[i]);
    }
}

function buttonsRandom() {
    let choices = ['btn-red', 'btn-blue', 'btn-green', 'btn-yellow'];

    for (let i = 0; i < allButtons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}