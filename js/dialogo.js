$(function() {
    var form = $("#dialog-form form"); // Obtén el formulario dentro del diálogo

    $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Enviar": function() {
                form.submit(); // Envía el formulario
                $(this).dialog("close");
            },
            Cancelar: function() {
                $(this).dialog("close");
            }
        },
        close: function() {
        }
    });

    $("#open-dialog").on("click", function() {
        $("#dialog-form").dialog("open");
    });
});