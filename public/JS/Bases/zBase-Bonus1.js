
const ContentBnt = document.querySelector('.content-btn')

const ContentTexte = document.querySelector('.content-texte');

const practical = document.querySelectorAll('.content-texte .practical');

const boxBtn = document.querySelector('.box-btn');

const play = document.querySelectorAll('.play');

const stop = document.querySelectorAll('.stop');

const audio = document.querySelectorAll('audio');

const close = document.querySelectorAll('.opp .close');





// Au click du Bouton 1 Show texte 1

const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[0].style.display = "block";
});


// Au click du Bouton 2 Show texte 2

const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[1].style.display = "block";
});


// Au click du Bouton 3 Show texte 3

const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[2].style.display = "block";
});


// Au click du Bouton 4 Show texte 4

const btn4 = document.querySelector('.btn4');

btn4.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[3].style.display = "block";
});


// Au click du Bouton 5 Show texte 5

const btn5 = document.querySelector('.btn5');

btn5.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[4].style.display = "block";
});


// Au click du Bouton 6 Show texte 6

const btn6 = document.querySelector('.btn6');

btn6.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[5].style.display = "block";
});


// Au click du Bouton 7 Show texte 7

const btn7 = document.querySelector('.btn7');

btn7.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[6].style.display = "block";
});


// Au click du Bouton 8 Show texte 8

const btn8 = document.querySelector('.btn8');

btn8.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[7].style.display = "block";
});


// Au click du Bouton 9 Show texte 9

const btn9 = document.querySelector('.btn9');

btn9.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[8].style.display = "block";
});


// Au click du Bouton 1 Show texte 2

const btn10 = document.querySelector('.btn10');

btn10.addEventListener('click', () =>{
    ContentBnt.style.display = "none";
    practical[9].style.display = "block";
});


// Bouton close

for(let i = 0; i < close.length; i++) {

    close[i].addEventListener('click', () =>{
        ContentBnt.style.display = "block";
        practical[i].style.display = "none";
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