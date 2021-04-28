const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String, //aqui le digo que tipo de dato va a recibir
    },
    lastname: {
        type: String,
    },
    age: {
        Number
    }
})

module.exports = model("User", userSchema )

/*que datos requiere guardar ese modelo.
user? =>
producto => title, desc, precio

*/