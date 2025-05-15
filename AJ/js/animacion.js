document.addEventListener('DOMContentLoaded', () => {
    const animacionInicio = document.getElementById('animacion-inicio');
    const contenidoPrincipal = document.getElementById('contenido-principal');

    setTimeout(() => {
        animacionInicio.classList.add('oculto');
        contenidoPrincipal.classList.remove('oculto');
    }, 2000);
});