const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://Dipendra:Redghost1234$5@cluster0.dwdrx.mongodb.net/carsrental', {useUnifiedTopology: true , useNewUrlParser: true})

//'mongodb+srv://sathya:sathyapr@cluster0.dkuc0.mongodb.net/sheycars-udemy

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose