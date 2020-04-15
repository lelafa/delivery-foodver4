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
    if (counter > 0){counter -=1;}
    return counter;
});

function countMinus(){
    document.getElementById("counter").innerHTML = countPlusM();
}

var counter2 = 0;
var countPlusF2 = (function () {
    return function () {return counter2 +=1;}
})();

function countPlus2(){
    document.getElementById("counter2").innerHTML = countPlusF2();
}

var countPlusM2 = (function () { 
    if (counter2 > 0){counter2 -=1;}
    return counter2;
});

function countMinus2(){
    document.getElementById("counter2").innerHTML = countPlusM2();
}

//

counter3 = 0;

const plusC3 = document.querySelector(".plusC3");
const minusC3 = document.querySelector(".minusC3");

plusC3.addEventListener('click', plusC3F);
minusC3.addEventListener("click", minusC3F);

function plusC3F(){
    document.getElementById("counter3").innerHTML = countPlus3();
}

function minusC3F(){
    document.getElementById("counter3").innerHTML = countMinus3();
}

var countPlus3 = (function (){
    return counter3 +=1;
});


var countMinus3 = (function () { 
    if (counter3 > 0){counter3 -=1;}
    return counter3;
});




//price display counter 1


var soumCounter1 = 0;

const plus2501 = document.querySelector(".plus2501");
const minus2501 = document.querySelector(".minus2501");

plus2501.addEventListener('click', plus2501F);
minus2501.addEventListener("click", minus2501F);

var plus2501F = (function () {
    return function () {return soumCounter1 +=250;}
})();

function plus2501F(){
    
    document.getElementById("counterSoumDisplay1").innerHTML = plus2501F() + " ₽";
    document.getElementById("counterSoumBottom").innerHTML = soumCounter1 + soumCounter2 + " ₽";
}
    
var minus2501F = (function () {
    if(soumCounter1 > 0){soumCounter1 -=250;}
    return soumCounter1;
});

function minus2501F(){
    
    document.getElementById("counterSoumDisplay1").innerHTML = minus2501F() + " ₽";
    document.getElementById("counterSoumBottom").innerHTML = soumCounter1 + soumCounter2 + " ₽";
}

//counter 2

var soumCounter2 = 0;

const plus395 = document.querySelector(".plus395");
const minus395 = document.querySelector(".minus395");

plus395.addEventListener('click', plus395F);
minus395.addEventListener("click", minus395F);

var plus395F = (function () {
    return function () {return soumCounter2 +=395;}
})();

function plus395F(){
    
    document.getElementById("counterSoumDisplay2").innerHTML = plus395F() + " ₽";
    document.getElementById("counterSoumBottom").innerHTML = soumCounter1 + soumCounter2 + " ₽";
}
    
var minus395F = (function () {
    if(soumCounter2 > 0){soumCounter2 -=395;}
    return soumCounter2;
});

function minus395F(){
    
    document.getElementById("counterSoumDisplay2").innerHTML = minus395F() + " ₽";
    document.getElementById("counterSoumBottom").innerHTML = soumCounter1 + soumCounter2 + " ₽";
}

//сounter 3

var soumCounter3 = 0;

const plus2503 = document.querySelector(".plus2503");
const minus2503 = document.querySelector(".minus2503");

plus2503.addEventListener('click', plus2503F);
minus2503.addEventListener("click", minus2503F);

var plus2503F = (function () {
    return function () {return soumCounter3 +=250;}
})();

function plus2503F(){
    
    document.getElementById("counterSoumDisplay3").innerHTML = plus2503F() + " ₽";
    document.getElementById("counterSoumBottom").innerHTML = soumCounter1 + soumCounter2 + soumCounter3 + " ₽";
}
    
var minus2503F = (function () {
    if(soumCounter3 > 0){soumCounter3 -=250;}
    return soumCounter3;
});

function minus2503F(){
    
    document.getElementById("counterSoumDisplay3").innerHTML = minus2503F() + " ₽";
    document.getElementById("counterSoumBottom").innerHTML = soumCounter1 + soumCounter2 + soumCounter3 + " ₽";
}
