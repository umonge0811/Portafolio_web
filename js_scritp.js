let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
document.querySelectorAll('.bento-box').forEach(box => {
    box.addEventListener('click', function() {
        const videoSrc = this.getAttribute('data-video');
        const modal = document.getElementById('modal');
        const modalVideo = document.getElementById('modal-video');

        modal.style.display = "block";
        modalVideo.src = videoSrc;
        modalVideo.play();
    });
});

document.querySelector('.close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');

    modal.style.display = "none";
    modalVideo.pause();
});

document.querySelector('.nav-responsive').addEventListener('click', function() {
    const nav = document.querySelector('nav.responsive');
    nav.classList.toggle('open');
});


