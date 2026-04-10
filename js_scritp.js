let menuVisible = false;

// ── SCROLL SPY ──────────────────────────────────────────────
function activarSeccionActual() {
    const secciones = document.querySelectorAll('section[id]');
    const navLinks  = document.querySelectorAll('#nav a[href^="#"]');
    const scrollY   = window.scrollY;
    const offset    = 90; // altura del header + margen

    let actual = '';

    secciones.forEach(sec => {
        if (scrollY >= sec.offsetTop - offset) {
            actual = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${actual}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activarSeccionActual, { passive: true });
document.addEventListener('DOMContentLoaded', activarSeccionActual);
// ────────────────────────────────────────────────────────────
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

// Abrir demo en modal
function abrirDemo(videoUrl) {
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');
    modal.style.display = "block";
    modalVideo.src = videoUrl;
    modalVideo.play();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    form.reset();
                    alert('Mensaje enviado con éxito!');
                } else {
                    throw new Error('Error en el envío del formulario');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
            });
        });
    }
});

// Función para reproducir preview de videos en la sección demos
function reproducirPreview(video) {
    video.play();
}

function pausarPreview(video) {
    video.pause();
    video.currentTime = 0;
}

document.addEventListener('DOMContentLoaded', function() {
    // Preview de videos con hover
    document.querySelectorAll('.video-preview').forEach(preview => {
        const video = preview.querySelector('video');
        const overlay = preview.querySelector('.video-overlay');

        preview.addEventListener('mouseenter', function() {
            reproducirPreview(video);
        });

        preview.addEventListener('mouseleave', function() {
            pausarPreview(video);
        });

        // Al hacer clic en el overlay, abrir el modal
        overlay.addEventListener('click', function() {
            abrirDemo(video.src);
        });
    });

});
