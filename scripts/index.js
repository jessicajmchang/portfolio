// Show / Hide Menu Script //
const body = document.body;
const btnMenu = document.querySelector('.menu');

btnMenu.addEventListener('click', function(e){
    e.preventDefault();
    body.classList.toggle('show');
});