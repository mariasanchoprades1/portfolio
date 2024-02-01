$(document).ready(function(){
    // Verificar si jQuery UI está cargado
    if (typeof $.ui === 'undefined') {
        console.error("jQuery UI no está cargado. Por favor, inclúyelo para que las animaciones funcionen.");
        return;
    }

    // Esconde los elementos inicialmente
    $('.parrafo-activo').hide();

    // Cuando el ratón pasa por encima de la sección 'Sobre Mí'
    $('#sobre-mi').mouseenter(function() {
        $('.parrafo-activo').first().fadeIn(1000, function() {
            // Mostrar el segundo párrafo después de que el primero esté completamente visible
            $('.parrafo-activo').last().fadeIn(1000);
        });
    });

    // Cuando el ratón sale de la sección 'Sobre Mí'
    $('#sobre-mi').mouseleave(function() {
        $('.parrafo-activo').last().fadeOut(1000, function() {
            // Ocultar el primer párrafo después de que el segundo esté completamente oculto
            $('.parrafo-activo').first().fadeOut(1000);
        });
    });
});
