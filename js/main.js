new WOW().init();

//all buttons корзина

const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonClose = document.querySelector(".button-close");

let buttons = document.getElementsByClassName('button');

for(let i = 0; i<buttons.length; i++){
buttons[i].addEventListener('click', toggleModal);
close.addEventListener("click", toggleModal);
buttonClose.addEventListener("click", toggleModal);
}

function toggleModal () {
    modal.classList.toggle("is-open");
}

//login вход

const modalLogin = document.querySelector(".modal-login");
const buttonLogin = document.querySelector(".button-login");
const buttonCloseLogin = document.querySelector(".button-close-login");

buttonLogin.addEventListener("click", toggleModalLogin);
buttonCloseLogin.addEventListener("click", toggleModalLogin);

function toggleModalLogin () {
    modalLogin.classList.toggle("login-is-open");
}

//quantity changes
var counter = 0;
var countPlusF = (function () {
    return function () {return counter +=1;}
})();

function countPlus(){
    document.getElementById("counter").innerHTML = countPlusF();
}

var countPlusM = (function () {
    return function () {return counter -=1;}
})();

function countMinus(){
    
    document.getElementById("counter").innerHTML = countPlusM();
}
//prices display
