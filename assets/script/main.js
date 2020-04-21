// Open Modal

var triggerButton = document.getElementById('trigger-button');
triggerButton.addEventListener('click', onClickTrigger);
var modal = document.querySelector('.modal-box');
var backgroundShadow = document.querySelector('.modal-bg');

function onClickTrigger(){
    modal.style.display = 'block';
    backgroundShadow.style.display = 'block';
}

// Close Modal
// from the X
var closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', closeModal);

// from the 'Close' text
var closeText = document.querySelector('.close-text');
closeText.addEventListener('click', closeModal);


function closeModal(){
    modal.style.display = 'none';
    backgroundShadow.style.display = 'none';
}