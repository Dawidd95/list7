let toturial = document.querySelector(".header__toturial");
let toturialModal = document.querySelector(".toturial-modal");
let closeToturial = document.querySelector(".content__toturial-close");
let body = document.querySelector("body");
let modal = document.querySelector('.container__modal');
let btn = document.querySelector('.container__add-button');
let span = document.getElementsByClassName("content__close")[0];
let add = document.querySelector(".content__button");
let menu = document.querySelector(".menu__overlay");
let data = document.querySelector(".data__input");
data.setAttribute('value', new Date().toLocaleDateString("en-US"));   



btn.addEventListener("click", function() {
    body.style.overflowY = "hidden";
    modal.style.display = "block";
    btn.style.display = "none";
});

span.addEventListener("click", function() {
	body.style.overflowY = "scroll";
    modal.style.display = "none";
    btn.style.display = "block";
});

add.addEventListener("click", function() {
	body.style.overflowY = "scroll";
    modal.style.display = "none";
    btn.style.display = "block";
})

toturial.addEventListener("click", function() {
    toturialModal.style.display = "block";
})

closeToturial.addEventListener("click", function() {
    toturialModal.style.display = "none";
})

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflowY = "scroll";
        btn.style.display = "block";
    }
});
