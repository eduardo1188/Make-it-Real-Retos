// //se descarga moongose

// const { error } = require("console");
// const mongoose = require("mongoose");
//  const URI = "mongodb://127lslkfjndkldf"
//  const db = mongoose.connection
// //conectar la db
// mongoose.connect("//el numero que aparece en la cmd que sale al escribir mongo", {
//     useNewUrlPArser: true,
//     useNewUrlTopology: true
// })
//     .catch(error => console.log(error)) //para capturar errores
//     //mostrar cuando se conecto
// mongoose.connection.once("open", _=> console.log("alerta", error))
require("./dbConnection-")

const User = require("./model/user")

const user = new User({
    name: "jhon",
    lastname: "Mc",
    age: 15
})
console.log(user)