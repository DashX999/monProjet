

const fermer = document.querySelector('.d1 .text button');

const voirPlus = document.querySelector('.d1 .see-text');

const boutonVoirPlus = document.querySelector('.d1 .voir-plus');

const CreateAcount = document.querySelector('.create');

const explain = document.querySelector('.container-pay-payBases .d1');

const formFictif = document.querySelector('.container-pay-payBases .d2');


// Bouton Voir Plsu

boutonVoirPlus.addEventListener('click', () =>{
    voirPlus.style.display = "block";
});


// Bouton Fermer

fermer.addEventListener('click', () =>{
    voirPlus.style.display = "none";
});


// Affichez le formulaire test

CreateAcount.addEventListener('click', () =>{
    explain.style.display = "none";
    formFictif.style.display = "block";
})




// ################################################################################################


// Vérification


const selection1 = document.querySelector('.selection1');

const btnJeSuisPret = document.querySelector('.selection1 .v1');

const selection2 = document.querySelector('.selection2');

const selection3 = document.querySelector('.selection3');

const selection4 = document.querySelector('.selection4');

const btndeuxMille = document.querySelector('.selection4 .opp #pay-btn')

const btnvaliderLePayement = document.querySelector('.samarche button');

const OUI = document.querySelector('.selection3 .lastClick');

const PayementValidator = document.querySelector('.PayementValidator');


// Faire disparaitre le texte ==> Vous avez decidez ...

btnJeSuisPret.addEventListener('click', () =>{
    selection1.style.display = "none";
    selection2.style.display = "block";
});


// Faire disparaitre ==> Le formulaire test

btnvaliderLePayement.addEventListener('click', () =>{
    selection2.style.display = "none";
    selection3.style.display = "block";
});


// Faire disparaitre ==> La Demande de paiement

OUI.addEventListener('click', () =>{
    selection3.style.display = "none";
    selection4.style.display = "block";
});


// ==> Valider pour de vrai le paiement

btndeuxMille.addEventListener('click', () =>{
    setTimeout( () =>{
        selection4.style.display = "none";
        PayementValidator.style.display = "block";
    }, 1000);
});