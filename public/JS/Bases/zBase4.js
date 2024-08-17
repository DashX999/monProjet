

const exo1 = document.querySelector('.btn1');

const exo2 = document.querySelector('.btn2');

const exo3 = document.querySelector('.btn3');

const contentexo1 = document.querySelector('.content-exercice1');

const contentexo2 = document.querySelector('.content-exercice2');

const contentexo3 = document.querySelector('.content-exercice3');

const back = document.querySelectorAll('.back');

const notice = document.querySelector('.notice');




// EXO 1

exo1.addEventListener('click', () =>{
    contentexo1.style.display = "block";
    notice.style.display = "none";
});


// EXO 2

exo2.addEventListener('click', () =>{
    contentexo2.style.display = "block";
    notice.style.display = "none";
});


// EXO 3

exo3.addEventListener('click', () =>{
    contentexo3.style.display = "block";
    notice.style.display = "none";
});