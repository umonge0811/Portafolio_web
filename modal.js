// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalVideo = document.getElementById("modal-video");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    // Función para abrir el modal con video
    function openModalWithVideo(videoSrc) {
        modal.style.display = "block";
        modalVideo.src = videoSrc;
        modalVideo.style.display = "block";
        modalImg.style.display = "none";
        modalVideo.load(); // Reiniciar el video
        modalVideo.play(); // Reproducir el video
    }

    // Función para abrir el modal con imagen
    function openModalWithImage(imgSrc) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
    }

    // Listeners para abrir el modal con el video correspondiente
    document.querySelectorAll(".video-box").forEach(box => {
        box.addEventListener("click", function() {
            const videoSrc = this.getAttribute("data-video");
            openModalWithVideo(videoSrc);
        });
    });

    // Listeners para abrir el modal con la imagen correspondiente
    document.querySelectorAll(".image-box").forEach(box => {
        box.addEventListener("click", function() {
            const imgSrc = this.querySelector("img").src;
            openModalWithImage(imgSrc);
        });
    });

    // Listener para cerrar el modal al hacer clic en el botón de cerrar
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        modalVideo.pause();
    });

    // Listener para cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalVideo.pause();
        }
    });
});
