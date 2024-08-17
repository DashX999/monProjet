

const replay = document.querySelector('.replay');

const GoExercice = document.querySelector('.go-exercice');

const ContentCours = document.querySelector('.content-cours');

const ContentGoExercice = document.querySelector('.content-go-exercice');

const play = document.querySelector('.play');

const stop = document.querySelector('.stop');

const audio = document.querySelector('audio');


// Affichez Le Contenue du Cours


replay.addEventListener('click', () => {

    ContentCours.style.display = "block";
    ContentGoExercice.style.display = "none";
});


// Affichez Le Contenue de L'exercice


GoExercice.addEventListener('click', () => {

    ContentCours.style.display = "none";
    ContentGoExercice.style.display = "block";
});


// Play Audio

play.addEventListener('click', () => {
    audio.play();
});


// Stop Audio


stop.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});