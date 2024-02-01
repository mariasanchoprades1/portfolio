$(document).ready(function(){
    $("#submitForm").click(function(){
        var formData = $("#contactForm").serialize(); // Serializa los datos del formulario

        $.ajax({
            type: "POST",
            url: "sendEmail.php",
            data: formData,
            success: function(data){
                $("#responseMessage").html(data); // Muestra la respuesta en el div responseMessage
            },
            error: function(){
                $("#responseMessage").html("Hubo un error al procesar tu solicitud.");
            }
        });
    });
});