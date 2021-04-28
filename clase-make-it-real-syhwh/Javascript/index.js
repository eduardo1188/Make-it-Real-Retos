//Ecmascript 6
// 0. Tipos de datos
// primitives --> numerico -boolean -string -null --undefined --symbol
//array ebjetos es una estructura
//
// var --< function scope Nio se usa    NO
//let --<block scope --no permite redeclaracion si permite re asignación
//const --> block scope, no permite re declaración no permite reasignación

/*var name = "pepe"
name = "juan"
const lastname = "james"
lastname = "" //no se puede volver a declarar
console.log(name, lastname)*/
/*function one() {
    let name = "james"
    console.log(name)
}
one()
*/
//2. template strings
/*
const name = "jhon"
const lastname = "james"
console.log("El nombre es", name , "el apellido es" , lastname)
console.log(`El nombre es ${name}  el apellido es ${lastname}`) //template strings
*/


// 3. Funciones -->hoisting
/*function name(argumentos) {
    //codigo
}*/
//funciones anonimas
/*function(){
    //codigo
}
*/
//declararla dentro de una constante
/*const name = function name(){
    //codigo
}*/
//inmediative invoked function
//const array = [1, 2, 3, 4, 5]


//3.1 arrow function
//This ->binding
/*const suma =(a, b) => console.log(`este es a ${a}`)
const name = function add(a, b) {
    return a + b
}
console.log(suma(`Hola soy A`))
*/

//

// 4. Condicionales -> desiciones 

//se puede ejecutar solo
/*if (condicion) {
    //codigo que se ejecuta si la condicion es verdadera
}*/
/*const age = 18
if (age > 18) {
    console.log(`Es mayor de edad`)
} else {
    console.log(`menor de edad`)
} */
//switch case
// la expresion que se le pase debe ser igual, no compara booleans
/*
const day = "lunes" //esta expresion debe ser igual a la del case
switch (day) {
    case "lunes":
        console.log(`el dia ${day}`)
    break; //el break dice que ejecute lo del lunes y pare
    case "martes":
        console.log(`el dia es ${day}`)
    default:
        console.log(`el dia es NULO`)
    //break;
}*/

//5. Ciclos ->repetir `do while` casi no se usa
//For y while.
// for -->le doy el numero de repeticiones, 
// while --> condicion --> 
/*for (let init = 0; init < valor; i++) {
 //codigo
 console.log(init)
}*/
/*for (let init = 0; init < 10; init++) {
    //codigo
    console.log(init)
   }*/
/*let variable = 0
while (variable < 10) {
    console.log(variable)
    variable++
}*/

//setTimeout
/*let init = 0
setTimeout(() => {  //para dar un tiempo de respuesta
    console.log("Hola", init)
}, 5 * 1000);*/

/*let init = true
while (init) {
    console.log("inside the while")
}
setTimeout(() => {  
    init = false
    console.log("Hola", init)
}, 1000);*/

//funciones -- valores por defecto

/*function name (para="no name"){
    console.log(`my name is ${para}`)
}
name()*/

//Arrays --> diferentes datos, diferente tipo, todos se almacenan en la misma variable
// Los arrays son dinamicos, se le pueden añadir mover y quitar elementos
//uso de la memoria, |
/*
const array = ["a", "asd", 12, [1,2,3, [777]], {
    name:"pepe", saldo:[
        {
            nomina:[
                {
                    meses:{
                        enero:2000, 
                        febrero:2000
                        }
                        }
                    ]
                }
            ]
        }
    ]
console.log(array[4].saldo[0].nomina[0].meses.febrero) //para acceder a febrero
*/
// para acceder a la propiaedad de un objeto se usa .name o . y el nombre de la llave
// 

// const array = [
//     {
//       budget: [
//         {
//           juan:
//           {
//             enero: {
//               ingresos: [{ salario: 2000, regalo: 4000 }],
//               gastos: [{ comida: 1000, arriendo: 10000 }]
//             },
//             febrero: {
//               ingresos: [{ salario: 2000, regalo: 4000 }],
//               gastos: [{ comida: 1000, arriendo: 10000 }]
//             }
//           },
//           pepe:
//           {
//             enero: {
//               ingresos: [{ salario: 2000, regalo: 4000 }],
//               gastos: [{ comida: 1000, arriendo: 1000 }]
//             },
//             febrero: {
//               ingresos: [{ salario: 2000, regalo: 4000 }],
//               gastos: [{ comida: 1500, arriendo: 4000  }]
//             }
//           },
//         }
//       ]
//     }]

    
// for (let index = 0; index < array[0].budget.length; index++) {
//     function impuestos() {

//     }

//     console.log(array[0].budget[index]);

// }
//

//operador ternario if / else
//es una variable con el ? evaluo la variable o condicion o expresion, lo que esta depsues va a devolverse si es verdarero 
//y lo que este despues de los : sera falso

    // const impuesto =(valor)=> valor > 1000 ? valor-(valor*0.10) : valor

    // console.log(impuesto(500))
    // console.log(impuesto(2000))


//  for (let i = 0; i < array[0].budget.length; i++) {
//   for(const [key, salary] of Object.entries(array[0].budget[i])){
//     console.log(key)
//     for(const [key, value] of Object.entries(salary)){
//       console.log(key,value)
//     }
//   }
// }

/* Para (nombre) en el mes de (mes) sus ingresos por concepto de (categoria) fueron
(valor) y sus gastos por concepto de (categ) fueron (valor) quedando un total de (valor)
**si total excede 1000 impuesto de 10% sino 0** menos impuesto de (valor) y un neto de ()
* el calculo del impuesto debe hacerse implementando una funcion */

//destructuring
//destructurig de arreglos 
//sirve para extraer arreglos 
const array = ["pepe", "porras", 25]
const [name, , age] = array
const objec = {
    name: "pepe",
    lastname: "porras"
}

const { name : newName } = objec //para renombrar una variable que ya se marco antes
console.log(name)
console.log(objec)
//en objetos debe coiuncidir en nobre de la const o de la variable