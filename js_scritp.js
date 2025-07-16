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

function descargarCV() {
    // Reemplaza 'ruta/al/cv.pdf' con la ruta real de tu archivo CV
    var urlCV = '/assets/CV_Ulises_Monge_Aguilar_ES.pdf';
    
    // Crea un elemento <a> temporal
    var link = document.createElement('a');
    link.href = urlCV;
    
    // Establece el atributo download con el nombre del archivo
    link.download = 'CV_Ulises_Monge_Aguilar_ES.pdf';
    
    // Añade el enlace al documento y simula un clic
    document.body.appendChild(link);
    link.click();
    
    // Elimina el enlace del documento
    document.body.removeChild(link);
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
    } else {
        console.error('El formulario con ID "contactForm" no se encontró en el documento.');
    }
});

// Función para descargar videos
function descargarVideo(videoUrl, nombreArchivo) {
    // Crear un elemento <a> temporal para la descarga
    var link = document.createElement('a');
    link.href = videoUrl;
    link.download = nombreArchivo;
    
    // Añadir el enlace al documento y simular un clic
    document.body.appendChild(link);
    link.click();
    
    // Eliminar el enlace del documento
    document.body.removeChild(link);
}

// Función para reproducir preview de videos en la sección videos
function reproducirPreview(video) {
    video.play();
}

function pausarPreview(video) {
    video.pause();
    video.currentTime = 0;
}

document.addEventListener('DOMContentLoaded', function() {
    // Agregar eventos para preview de videos en la sección videos
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
            const videoSrc = video.src;
            const modal = document.getElementById('modal');
            const modalVideo = document.getElementById('modal-video');

            modal.style.display = "block";
            modalVideo.src = videoSrc;
            modalVideo.play();
        });
    });

    setTimeout(() => {
        const animateElements = document.querySelectorAll('#inicio .animate__animated');
        animateElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add(element.dataset.animation);
            }, index * 200); // Retraso escalonado para cada elemento
        });
    }, 500); // Retraso inicial de 500ms

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.dataset.animation;
                entry.target.classList.add('animate__animated', animationClass);
                observer.unobserve(entry.target); // Deja de observar una vez que la animación se activa
            }
        });
    }
    

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.5 // Ajusta este valor según el comportamiento que prefieras
    });
    

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});