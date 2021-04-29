//Funciones
/*
let saludar = function (nombre) {
    return "Hola " + nombre;
}

let hola = saludar;


hola("Eduardo");

let saludaEduardo = saludar("Eduardo");
alert(saludaEduardo);

let saludaPedro = saludar("Pedro");
document.write(saludaPedro);
*/


/*
function saludar(nombre) {
    return "Hola " + nombre;
}


var saludaEduardo = saludar("Eduardo");
alert(saludaEduardo);

var saludaPedro = saludar("Pedro");
document.write(saludaPedro);
*/

/* 
function saludar(nombre) {
    alert("Hola " + nombre);
}


saludar("Eduardo");
saludar("Pedro");
*/
/*function saludar() {
    alert("Hola Eduardo");
}

saludar()*/



//Primer video 
/*var arr = [2, true, "Hola Mundo", [2, 4, 5], "uno más"];*/
/*
for (var i = 0; i < arr.length; i++) { //para iterar un arreglo e imprimir cada una de las posiciones
    var item = arr[i];
    alert(item)
}
*/
/* para mostrar una alerta var hola = arr[2];  //para obtener la posicion de un arreglo
alert(hola)
*/
/*//ciclos
var i = 1
while ( i <= 10) {
    alert(hola);
    i = i +1;
}
for (i = 1; i <= 10; i++) {
    alert(hola);
}
//condicionales
if  (condicion1) {
    for (i = 1; i <= 10; i++) {
        alert(hola);
    }
} else if (condicion2) {
} else if (condicion3) {
}else {
}*/

//Objetos
/*
let humanoide1 = { 
    nombre: "Pedro Perez",
    edad: 27,
    casado: false,
    profesion: "Programador JS",
    hobbies: ["cine", "squash"],
    propiedades: {
        casas: 1,
        carros: 2,
        fincas: 0
    }
};

alert(humanoide1.nombre);
*/
/*
let puntaje = 0

let preguntas = [
    { n1: 1, n2: 1 },
    { n1: 2, n2: 3 },
    { n1: 3, n2: 4 }
]
for (let i = 0; i < preguntas.length; i++) {
    let pregunta = preguntas[i] 
    let respuesta = prompt("Cuanto es " + pregunta.n1 + " + " + pregunta.n2 + "?")
    if (respuesta == pregunta.n1 + pregunta.n2) {
        puntaje++
        alert("Muy bien, tu puntaje es " + puntaje)
    } else {
        alert("Incorrecto")
    }
}
alert("Tu puntaje final es " + puntaje)
*/
// Para hacer una suma opcion 1
/*
function suma(num1, num2) {
    let result = num1 + num2
    return result
}
//opcion 2 para function suma
function suma(a, b) {
    return a + b
}
*/

//Saludo
/*
function saludo(nombre) {
    return "Hola " + nombre
}
*/

//Longitud de la cadena
/*
function longitud(string) {
    for (let i = 0; i < string.length; i++) {
    }
    return string.length
}
//otra solucion
function longitud(str) {
    return str.length
} 
*/
//Un poco de lógica
/*
function isAlive(playerName, points) {
    if (playerName === "ikk" && points > 30) {
        return true
    } else if (playerName === "gut" && points > 10) {
        return true
    } else {
        return false
    }
}
console.log(isAlive("ikk", 20))
//Solucion mas corta

function isAlive(playerName, points) {
    return (playerName === "ikk" && points > 30) || (playerName === "gut" && points > 10)
}
*/
