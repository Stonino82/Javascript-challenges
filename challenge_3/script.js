function rpsGame(yourChoice) {
    console.log("My choice:", yourChoice.id)
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = pickANumber(randomInteger());
    console.log("Bot choice:", botChoice);

    results = decideWinner(humanChoice, botChoice); // I.e.: [1, 0]
    console.log(results)
    
    message = finalMessage(results);  // I.e.: {'message': 'You won', 'color': 'green'}
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

    refresh();
}


//Math.random devuelve un numero decimal random desde 0 hasta 0.9periodico
//Lo moltiplico *3 para que devuelva numeros decimales desde 0 hasta 2.9periodico
//Math.floor redondea el numero hacia abajo a numero entero (p.e.: 2.87 --> 2)
function randomInteger() {
    return Math.floor(Math.random() * 3);
}

//El numero (que será pasado por la funcion randomInteger) representa el indice del array ['rock', 'paper', 'scissors']
function pickANumber(number){
    return ['rock', 'paper', 'scissors'][number]; //devuelve un array [indice1, indice2, indice3][eligo el indice]
}

function decideWinner(humanChoice, botChoice) {
    var rpsDatabase = { //todos los casos
        'rock': {'scissors':1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }

                                                            //I.e.: if I pick rock and bot pick scissors
    var humanScore = rpsDatabase[humanChoice][botChoice];   //rpsDatabase[rock][scissors] = 1
    var botScore = rpsDatabase[botChoice][humanChoice];     //rpsDatabase[scissors][rock] = 0

    return [humanScore, botScore];

}


// function count(humanScore, botScore) {
//     console.log("HUMAN SCORE", humanScore);
// }


//para emprimir los mensajes es sufiente con mirar el score del usuario (humanScore)
function finalMessage([humanScore, botScore]) {
    if(humanScore === 0){
        return {'message': 'You lost!', 'color': 'red'}
    } else if(humanScore === 0.5) {
        return {'message': 'You tied!', 'color': '#ffbe00'}
    } else{
        return {'message': 'You win!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //creamos unos divs que haran de contenedores de las imagenes
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var messageDiv2 = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' >" + "<p style='text-align:center'>you</p>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' >" + "<p style='text-align:center'>computer</p>";
    messageDiv.innerHTML = "<p style='color:" + finalMessage['color'] + "; font-size:30px; font-weight: bold; padding: 5px;'>" + finalMessage['message'] + " </p>";
    messageDiv2.innerHTML = "<p>(refreshing in 2 seconds..)</p>";

    document.getElementById('container').appendChild(humanDiv);
    document.getElementById('container').appendChild(botDiv);
    document.getElementById('result').appendChild(messageDiv);
    document.getElementById('result').appendChild(messageDiv2);
}


function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 2000);
}