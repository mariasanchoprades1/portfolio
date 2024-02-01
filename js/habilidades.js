$(document).ready(function() {
    $("#slider-html").slider({
        range: "min",
        value: 50,  // Ajusta este valor según tu nivel de habilidad
        min: 0,
        max: 100,
        disabled: true  // Esto es para que el usuario no pueda cambiar el valor
    });
    // Repite para otros sliders de habilidades como CSS, JavaScript, etc.
});
