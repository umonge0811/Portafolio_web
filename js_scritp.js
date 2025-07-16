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

// Función específica para descargar videos de Emma
function descargarVideoEmma(videoUrl, nombreArchivo) {
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

// Función para cargar videos de Emma dinámicamente
function cargarVideosEmma() {
    // Lista de videos de Emma (actualiza esta lista cuando agregues videos)
    const videosEmma = [
        { 
            src: '/assets/videos_emma/Aprende los colores en inglés ｜ Colors vocabulary [8VWfK4SleTs].mp4', 
            title: 'Aprende los colores en inglés', 
            description: 'Video educativo para aprender los colores en inglés' 
        },
        { 
            src: '/assets/videos_emma/Episodio 1-26 ¡Todos los episodios! ｜ Barbie Dreamhouse Adventures ｜ @BarbieenCastellano [tEcCJp-MOQg].mp4', 
            title: 'Barbie Dreamhouse Adventures', 
            description: 'Episodios completos de Barbie Dreamhouse Adventures' 
        },
        { 
            src: '/assets/videos_emma/Hawaiian Roller Coaster Ride (From ＂Lilo & Stitch＂) [3OM7oi79hd4].mp4', 
            title: 'Hawaiian Roller Coaster Ride', 
            description: 'Canción de Lilo & Stitch - Hawaiian Roller Coaster Ride' 
        },
        { 
            src: '/assets/videos_emma/La Carrera Increíble ｜ @BarbieenCastellano [DhfD-Fzl2og].mp4', 
            title: 'La Carrera Increíble - Barbie', 
            description: 'Episodio de Barbie - La Carrera Increíble' 
        },
        { 
            src: '/assets/videos_emma/Lilo & Stitch： The Series ＂Angel＂ Full Episode! 💙🩷 ｜ Lilo & Stitch ｜ @disneychannelanimation [kX4wbaMVt-4].mp4', 
            title: 'Lilo & Stitch - Angel Episode', 
            description: 'Episodio completo de Lilo & Stitch - Angel' 
        }
    ];
    
    const grid = document.querySelector('#videos-emma .videos-grid');
    
    if (!grid) {
        console.error('No se encontró el contenedor de videos de Emma');
        return;
    }
    
    // Limpiar el grid y agregar los videos
    grid.innerHTML = '';
    
    if (videosEmma.length === 0) {
        // Mostrar mensaje si no hay videos
        grid.innerHTML = `
            <div class="video-item">
                <div class="video-info" style="text-align: center; padding: 40px;">
                    <h3>Próximamente</h3>
                    <p>Los videos de Emma se mostrarán aquí una vez que sean subidos a la carpeta /assets/videos_emma/</p>
                </div>
            </div>
        `;
        return;
    }
    
    videosEmma.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        
        videoItem.innerHTML = `
            <div class="video-preview">
                <video src="${video.src}" muted></video>
                <div class="video-overlay">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.description}</p>
                <button onclick="descargarVideoEmma('${video.src}', '${video.title.replace(/\s+/g, '_')}.mp4')" class="download-btn">
                    <i class="fa-solid fa-download"></i>
                    Descargar Video
                </button>
            </div>
        `;
        
        grid.appendChild(videoItem);
    });
    
    // Agregar eventos para preview de videos
    grid.querySelectorAll('.video-preview').forEach(preview => {
        const video = preview.querySelector('video');
        const overlay = preview.querySelector('.video-overlay');
        
        preview.addEventListener('mouseenter', function() {
            reproducirPreview(video);
        });
        
        preview.addEventListener('mouseleave', function() {
            pausarPreview(video);
        });
        
        overlay.addEventListener('click', function() {
            const videoSrc = video.src;
            const modal = document.getElementById('modal');
            const modalVideo = document.getElementById('modal-video');

            modal.style.display = "block";
            modalVideo.src = videoSrc;
            modalVideo.play();
        });
    });
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
    
    // Cargar videos de Emma
    cargarVideosEmma();
});