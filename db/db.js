

const mongoose = require('mongoose');

require('dotenv').config();


// Mise en place de la connexion avec la DB

mongoose.connect(process.env.MONGO_URI)
    .then( () =>{
        console.log("Connexion Approuvée");
    })
    .catch( (err) =>{
        console.log("Connexion Rejeté ==> " + err);
    })

module.exports = mongoose;