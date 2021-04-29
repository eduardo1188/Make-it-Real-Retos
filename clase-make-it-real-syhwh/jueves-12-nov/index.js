// const express = require("express")
// const cursos =require("./cursos")
// const app = express()

// app.get('/cursos', (req, res) => { //acceda a esa ruta
//     // const { name, lastname } =req.query
//     // const {param1 } = req.params
//     // // console.log(req.query)
//     // console.log(req.params)

//     // console.log(name, lastname)
//     // console.log(param1)
//     // res.send('Hello from/ ')

//     res.send(cursos)
// })

// app.get('/cursos/:id', (req,res) => {
//     const { id } = req.params

//     res.send(cursos.filter((curso) => curso.id === parseInt(id))) // si se inserta un id de curso 

// })
// // app.post('/', (req, res) => {
// //     console.log(req.params)
// //     console.log(req.body)
// //     res.send('post')
// // })
// app.listen(3000, () =>console.log('server in port 3000'))

//API

// const express = require("express")
// const cursos =require("./cursos")
// const path = require("path")
// const app = express()

// app.get('/cursos', (req, res) => { //acceda a esa ruta
//     res.send(cursos)
// })

// app.get('/cursos/:id', (req,res) => {
//     const { id } = req.params
//     res.send(cursos.filter((curso) => curso.id === parseInt(id))) // si se inserta un id de curso 
// })

// // copmo servir archivos estaticos

// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: path.join(__dirname, './public') }) // para un archivo que esta en otra carpeta
// })




// // app.post('/', (req, res) => {
// //     console.log(req.params)
// //     console.log(req.body)
// //     res.send('post')
// // })
// app.listen(3000, () =>console.log('server in port 3000'))

// const express = require("express")
// const cursos =require("./cursos")
// const path = require("path")
// const app = express()


// // middelware // funciion que se ejecuta entre dos elementos

// const middelware = (req, res, next) => {
//     console.log(req.url)

//     const { name } = req.query
//     console.log( name )
//     name !== 'luis' ? res.status(404).send("Not Found") : next() 
// }

// app.get('/', (req, res) => { 
//     res.sendFile('index.html', {root: path.join(__dirname, './public') }) // para un archivo que esta en otra carpeta
// })
// //middelware es una funbcion que se coloca en la mitad de la ruta, recibe el req el res y el next, si no se pone el next seva a queda pensando

// // app.get('/cursos', (req, res) => { //acceda a esa ruta
// //     res.send(cursos)
// // })

// // app.get('/cursos/:id', (req,res) => {
// //     const { id } = req.params
// //     res.send(cursos.filter((curso) => curso.id === parseInt(id))) // si se inserta un id de curso 
// // })

// // copmo servir archivos estaticos


// // app.post('/', (req, res) => {
// //     console.log(req.params)
// //     console.log(req.body)
// //     res.send('post')
// // })
// app.listen(3000, () =>console.log('server in port 3000'))


// middelware // funciion que se ejecuta entre dos elementos

const express = require("express")
const cursos =require("./cursos")
const path = require("path")
const app = express()


app.use(express.json()) //para envia rinformacion al servidor en formato json
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => { 
    res.sendFile('index.html', {root: path.join(__dirname, './public') }) // para un archivo que esta en otra carpeta
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/about.html'))
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).send('body correcto')
})


app.listen(3000, () =>console.log('server in port 3000'))

//para crerar paginas web 

//Pug

//Handlebars

//como usar alguna de las dos con express y crea una pagina pequeña
//