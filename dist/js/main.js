document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector(".toggleSide");
    let li = document.querySelectorAll(".sidebar li");
    let sidebar = document.querySelector('.sidebar');
    let section = document.querySelectorAll(".container div");
    let container = document.querySelector('.app-container');

    btn.addEventListener('click',() => {
        container.classList.toggle('toggled');        
    });

    sidebar.addEventListener('click', () =>{
        container.classList.toggle('toggled');
    });

    for (var i = 0; i < li.length; i++) {
        li[i].onclick = function() {
            let currentId = this.getAttribute('value');
            for (var i = 0; i < section.length; i++) {
                if (section[i].id == currentId){
                    section[i].classList.add("current");
                }else{
                    section[i].classList.remove("current");
                }
            }
        }
    }
});