let menuButton = document.getElementById('bar');


let links = document.getElementsByClassName('nav-links')[0];



let toggleFunction = () =>{
    links.classList.toggle('not-active');
    menuButton.classList.toggle('fa-bars');
    menuButton.classList.toggle('fa-xmark');
}


