

const express = require('express');

const route = express.Router();

const UsersFans = require('../models/model');

const bcrypt = require('bcrypt');




// Methode GET


// La route Principale

route.get('/', (req, res) =>{
    res.render('index')
});

// La route SignUp

route.get('/armo', (req, res) =>{
    res.render('signup')
});

// La route Login Bases

route.get('/R3uLtt10n_5tr1ng12345', (req, res) =>{
    res.render('loginBases')
});

// La route Login Eveil

route.get('/qfL93qn4zjP7LtufCedG4yJBDv2aF4W0fD', (req, res) =>{
    res.render('loginEveil')
});

// La route Login Maîtrise

route.get('/EgZjaHJvbWUyBggAEEUYOTIJCAEQABgKGIAEMggIA', (req, res) =>{
    res.render('loginMaitrise')
});

// La route Bonus

route.get('/BonusLevel', (req, res) =>{
    res.render('BonusLevel')
});

// La route Page d'erreur lors de connexion

route.get('/ConnexionError', (req, res) =>{
    res.render('ConnexionError')
});




// ###################################################################################################

// Chemins Paiement Bases

route.get('/pay-payBases', async (req, res) =>{
    res.render('pay-paybases');
});

// Chemins Paiement Eveil

// route.get('/pay-payBases', async (req, res) =>{
//     res.render('pay-paybases');
// });

// Chemins Paiement Maîtrise

// route.get('/pay-payBases', async (req, res) =>{
//     res.render('pay-paybases');
// });



// ###################################################################################################


// Création d'un fans


route.post('/signup', async (req, res) =>{

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }


    // Vérifions si l'email est dejà asociez à un compte


    const emailExist = await UsersFans.findOne({email: data.email});

    if(emailExist) {
        res.send("Nous allons creer une page QUI DIT ++ L'email est dejà associez à un compte");
    }
    else{
        const saltRound = 10;

        const hashedPassword = await bcrypt.hash(data.password, saltRound);

        data.password = hashedPassword;

        const send = await UsersFans.insertMany(data);

        res.send("Nous allons creer une page QUI DIT ++ Compte creer avec succès");

        console.log(send);
    }
      
})




// ###################################################################################################


// Connexion Niveau Bases


route.post('/h3qh1fl8Uqklr8mjmPjPnhLCSL1epbt7wst4ZdJ', async (req, res) =>{

    try{

        const check = await UsersFans.findOne({email: req.body.email});

        if(!check) {
            res.send("Not Found");
        }

        const correctPassword = await bcrypt.compare(req.body.password, check.password);

        if(correctPassword) {
            
            const valid = check.Bases;

            if(valid) {
                res.render('Za8GDr2gxod1a0P0rCWAx0EtMv1v16a11a1P1');
            }
            else{
                res.send('Utilisateur introuvables');
            }

        }
        else{
            req.send('Mot de passe incorrecte');
        }
    }
    catch{
        res.send("Veillez Réesayer");
    }
})

module.exports = route;