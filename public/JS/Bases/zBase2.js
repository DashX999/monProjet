

const replay = document.querySelector('.replay');

const GoExercice = document.querySelector('.go-exercice');

const ContentCours = document.querySelector('.content-cours');

const ContentGoExercice = document.querySelector('.content-go-exercice');


// Affichez Le Contenue du Cours


replay.addEventListener('click', () =>{

    ContentCours.style.display = "block";
    ContentGoExercice.style.display = "none";
});


// Affichez Le Contenue de L'exercice


GoExercice.addEventListener('click', () =>{

    ContentCours.style.display = "none";
    ContentGoExercice.style.display = "block";
});