$(document).ready(function() {
    $("form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Por favor, introduce tu nombre",
                minlength: "Tu nombre debe tener al menos 2 caracteres"
            },
            email: {
                required: "Por favor, introduce tu correo electrónico",
                email: "Por favor, introduce un correo electrónico válido"
            },
            message: {
                required: "Por favor, introduce tu mensaje",
                minlength: "Tu mensaje debe tener al menos 10 caracteres"
            }
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});