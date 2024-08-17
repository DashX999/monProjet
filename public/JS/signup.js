

const ShowEye = document.querySelector('.bx-show');

const HideEye = document.querySelector('.bxs-hide');

const input = document.querySelectorAll('input');

const InfoPassword = document.querySelector('.info-password');

const main = document.querySelector('.d2 .main');

const sms = document.querySelector('.sms');

const emailvalid = document.querySelector('.bxs-check-circle');

const emailIcon = document.querySelector('.bx-envelope');







// Affichez le password

HideEye.addEventListener('click', () =>{
    HideEye.style.display = "none";
    ShowEye.style.display = "block";
    input[2].setAttribute('type', 'text');
})


// Cachez le password

ShowEye.addEventListener('click', () =>{
    ShowEye.style.display = "none";
    HideEye.style.display = "block";
    input[2].setAttribute('type', 'password');
})


// Vérification de l"Email


input[1].addEventListener('keyup', () =>{

    const val = input[1].value;

    const Obligado = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(val == "") {
        emailIcon.style.color = "gray";
        emailvalid.style.display = "none";
        emailIcon.style.display = "block";
        input[1].style.borderColor = "gold";
    }
    else if(val.match(Obligado)) {
        emailvalid.style.display = "block";
        emailIcon.style.display = "none";
        emailvalid.style.color = "#22C32A";
        input[1].style.borderColor = "#22C32A";
    }
    else { 
        emailIcon.style.display = "block";
        emailvalid.style.display = "none";
        emailIcon.style.color = "red";
        input[1].style.borderColor = "red";
    }
})



// Vérification du password

let alphabet = /[a-zA-Z]/ // De a à z en majuscule et de A à Z en miniscule

let numbers = /[0-9]/ // De 0 à 9

let caracteres = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/ // Un des caractere special est obligatoires


input[2].addEventListener('keyup', () =>{

    main.classList.add('active');

    let val = input[2].value;

    if(val == "") {
        main.classList.remove('active');
        ShowEye.style.color = "gray";
        HideEye.style.color = "gray";
        main.style.visibility = "hidden";
        input[2].style.borderColor = "gold";
        
    }


    if(val.match(alphabet) || val.match(numbers) || val.match(caracteres)) {
        sms.textContent ="Insufficient password";
        ShowEye.style.color = "red";
        HideEye.style.color = "red";
        main.style.visibility = "visible";
        main.style.color = "red";
        input[2].style.borderColor = "red";
    };


    if(val.match(alphabet) && val.match(numbers) && val.length >= 6) {
        sms.textContent ="Adding special characters";
        ShowEye.style.color = "#cc8500";
        HideEye.style.color = "#cc8500";
        main.style.visibility = "visible";
        main.style.color = "#cc8500";
        input[2].style.borderColor = "#cc8500";
    }


    if(val.match(alphabet) && val.match(numbers) && val.match(caracteres) && val.length >= 8) {
        sms.textContent = "";
        ShowEye.style.color = "#22C32A";
        HideEye.style.color = "#22C32A";
        main.style.visibility = "hidden";
        input[2].style.borderColor = "#22C32A";
    };
});


// Au clique des input


input[0].addEventListener('click', () =>{
    input[0].style.borderColor = "gold";
});

input[1].addEventListener('click', () =>{
    input[1].style.borderColor = "gold";
});

input[2].addEventListener('click', () =>{
    input[2].style.borderColor = "gold";
});


// Quand on quitte le champ des Input


input[2].addEventListener('blur', () =>{
    input[2].style.borderColor = "#f5f3f396";
});

input[1].addEventListener('blur', () =>{
    input[1].style.borderColor = "#f5f3f396";
});

input[0].addEventListener('blur', () =>{
    input[0].style.borderColor = "#f5f3f396";
});