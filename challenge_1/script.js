function ageInDays() {
    var birthYear = prompt("What year were you born, my friend?");                              //el usuario inserta el año de nacimiento y lo guardo en la variable birthYear
    var calculoEdad = (2020 - birthYear) * 365;                                                 //el caluclo de los días
    var textAnswer = document.createTextNode('You are ' + calculoEdad + ' days old (from ' + birthYear + ").");

    var h3 = document.createElement('h3');                                                      //createElement: crea el elemento H3
    h3.setAttribute('id', 'days');                                                              //setAttribute: inserta en el elemento H3 el atributo id con el valor de ageInDays
    h3.appendChild(textAnswer);                                                                 //appendChild: inserta el valor de textAnswer dentro el h3


    var days = document.getElementById("days");                                                 //recojo la id "days" y la guardo en una variable, para luego con un if verificar si existe
    if(days){                                                                                   //si ya existe la id "days"
        days.remove();                                                                          //borrala
        document.getElementById("result").appendChild(h3);                                      //y dame el nuevo resultado
    } else {                                                                                    //sino
        document.getElementById("result").appendChild(h3);                                      //dame el resultado
    }
}

console.log(ageInDays);

function reset(){
    document.getElementById("days").remove();
}