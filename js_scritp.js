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

document.addEventListener('DOMContentLoaded', function() {
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
            } else {
                const animationClass = entry.target.dataset.animation;
                entry.target.classList.remove('animate__animated', animationClass);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.1 // Ajusta este valor según necesites
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
});