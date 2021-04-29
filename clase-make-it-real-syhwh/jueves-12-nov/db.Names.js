function DataBase() {
    this.names = []
    this.saveName = (name) => this.names.push({
        id:this.names.length + 1,
        name
        
    })
}

const db = new DataBase()

db.saveName("pepe")

console.log(db.names)

//CRUD 
//Create, 
//Read, 
//Update, 
//Delete