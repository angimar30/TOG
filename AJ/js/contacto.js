document.addEventListener('DOMContentLoaded', () => {
    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault();
        // Aquí iría la lógica para enviar el correo (necesitarías un backend)
        // Por ahora, simulamos un envío exitoso
        setTimeout(() => {
            formularioContacto.reset();
            mensajeEnviado.classList.remove('oculto');
            setTimeout(() => {
                mensajeEnviado.classList.add('oculto');
            }, 3000);
        }, 1000);
    });
});