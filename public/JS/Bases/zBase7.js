

const chapitre = document.querySelector('.chapitre');

const btn1 = document.querySelector('.btn1');

const btn2 = document.querySelector('.btn2');

const btn3 = document.querySelector('.btn3');

const txt1 = document.querySelector('.txt1');

const txt2 = document.querySelector('.txt2');

const txt3 = document.querySelector('.txt3');

const close = document.querySelectorAll('.opp .close');

const play = document.querySelectorAll('.play');

const stop = document.querySelectorAll('.stop');

const audio = document.querySelectorAll('audio');



// Bouton 1


btn1.addEventListener('click', () =>{
    txt1.style.display = "block";
    txt2.style.display = "none";
    txt3.style.display = "none";
    chapitre.style.display = "none";
});


// Bouton 2


btn2.addEventListener('click', () =>{
    txt1.style.display = "none";
    txt2.style.display = "block";
    txt3.style.display = "none";
    chapitre.style.display = "none";
});


// Bouton 3


btn3.addEventListener('click', () =>{
    txt1.style.display = "none";
    txt2.style.display = "none";
    txt3.style.display = "block";
    chapitre.style.display = "none";
});


// Close


for(let i = 0; i < close.length; i++) {

    close[i].addEventListener('click', () =>{
    txt1.style.display = "none";
    txt2.style.display = "none";
    txt3.style.display = "none";
    chapitre.style.display = "block";
    audio[i].pause();
    audio[i].currentTime = 0;
    });
    
};


// Play Audio

for(let i = 0; i < audio.length; i++) {
    play[i].addEventListener('click', () =>{
        audio[i].play();
    });  
}

// Stop Audio

for(let i = 0; i < audio.length; i++) {
    stop[i].addEventListener('click', () =>{
        audio[i].pause();
        audio[i].currentTime = 0;
    });
}