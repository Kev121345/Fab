document.addEventListener('DOMContentLoaded', function () {
    // Define la fecha límite para desbloquear el contenido
    const fechaLimite = new Date('2024-02-14T00:00:00');

    // Actualiza la cuenta regresiva cada segundo
    const cuentaRegresivaElement = document.getElementById('cuentaRegresiva');
    const siButton = document.getElementById('siButton');
    const noButton = document.getElementById('noButton');

    function actualizarCuentaRegresiva() {
        const ahora = new Date();
        const diferencia = fechaLimite - ahora;

        if (diferencia > 0) {
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            cuentaRegresivaElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        } else {
            cuentaRegresivaElement.innerHTML = '¡Desbloqueado!';
            siButton.removeAttribute('disabled');
            noButton.removeAttribute('disabled');
        }
    }

    // Actualiza la cuenta regresiva cada segundo
    setInterval(actualizarCuentaRegresiva, 1000);

    // Inicialmente, actualiza la cuenta regresiva
    actualizarCuentaRegresiva();
});

function mostrarRespuesta(respuesta) {
    const respuestaElement = document.getElementById('respuesta');
    const siButton = document.getElementById('siButton');
    const noButton = document.getElementById('noButton');
    if (respuesta === 'si') {
        respuestaElement.innerHTML = '¡Eso es genial! ¡Eres mi novio ahora! Ya nunca te podras salvar de mi';
    } else if (respuesta === 'no') {
        respuestaElement.innerHTML = '¿NO? Acaso oprimiste no, por desgracia de un modo u otro no podras ser libre si yo no estoy en tu vida';
    }
    // Desactiva los botones después de responder
    siButton.setAttribute('disabled', 'true');
    noButton.setAttribute('disabled', 'true');
}
