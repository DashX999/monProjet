

const express = require('express');

const app = express();

const dotenv = require('dotenv').config();

const routesGet = require('./routes/rsGET');

const routesBases = require('./routes/rsBases');

const DBConnect = require('./db/db');






// Implémentation des midlewares

app.use(express.static('./public'));

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// Implémentation du chemin GET 

app.use('/', routesGet);

// Implémentation du chemin GET Bases

app.use('/', routesBases);




























// Lancement du projet

app.listen(process.env.PORT, () =>{
    console.log("Lancement du projet ");
});