const mongoose = require("mongoose");


 const URI = "mongodb://127lslkfjndkldf"

 const db = mongoose.connection

//conectar la db
mongoose.connect(/*aqui llamamos la uri*/ {
    useNewUrlPArser: true,
    useNewUrlTopology: true
})
    .catch(error => console.log(error)) //para capturar errores


    //mostrar cuando se conecto

mongoose.connection.once("open", _=> console.log("alerta", error))