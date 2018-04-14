document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector(".toggleSide");
    let container = document.querySelector('.app-container');

    btn.addEventListener('click',() => {
        container.classList.toggle('toggled');        
    });
});