

const replay = document.querySelector('.replay');

const GoExercice = document.querySelector('.go-exercice');

const ContentCours = document.querySelector('.content-cours');

const ContentGoExercice = document.querySelector('.content-go-exercice');

const more = document.querySelector('.more');

const AfficheMore = document.querySelector('.Content-More');




// Voir Plus



more.addEventListener('click', () =>{
    AfficheMore.classList.toggle('closeOpen');
});



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