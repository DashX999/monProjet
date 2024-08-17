

const input = document.querySelectorAll('input');

const HideEye = document.querySelector('.bxs-hide');

const ShowEye = document.querySelector('.bxs-show');

const Base = document.querySelector('.choose .choose1');

const formBase = document.querySelector('.form-container');

const back = document.querySelector('.focus-object');



// Affichez le password

HideEye.addEventListener('click', () =>{
    HideEye.style.display = "none";
    ShowEye.style.display = "block";
    input[1].setAttribute('type', 'text');
})


// Cachez le password

ShowEye.addEventListener('click', () =>{
    ShowEye.style.display = "none";
    HideEye.style.display = "block";
    input[1].setAttribute('type', 'password');
})