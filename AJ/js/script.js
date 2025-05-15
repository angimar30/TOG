document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');
    const body = document.querySelector('body');
    const secciones = document.querySelectorAll('.seccion');
    const enlacesNav = document.querySelectorAll('header nav a');

    // Mostrar la primera sección por defecto
    const primeraSeccion = document.getElementById('procesos-seccion');
    if (primeraSeccion) {
        primeraSeccion.classList.add('activa');
    }

    // Toggling del menú hamburguesa
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('abierto');
        nav.classList.toggle('abierto');
    });

    // Navegación entre secciones
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            if (window.innerWidth <= 768) {
                menuToggle.classList.remove('abierto');
                nav.classList.remove('abierto');
            }

            secciones.forEach(seccion => {
                seccion.classList.remove('activa');
            });

            const seccionActivar = document.getElementById(targetId);
            if (seccionActivar) {
                seccionActivar.classList.add('activa');
                seccionActivar.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});