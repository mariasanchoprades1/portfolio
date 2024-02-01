<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'alusan7934@ieselcaminas.org';
    $mail->Password = '10217934';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('alusan7934@ieselcaminas.org', 'Maria');
    $mail->addAddress('alusan7934@ieselcaminas.org');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje de la página web';
    $mail->Body = "Nombre: {$_POST['name']}<br>Email: {$_POST['email']}<br>Mensaje: {$_POST['message']}";

    $mail->send();
    echo 'Mensaje enviado con éxito.';
} catch (Exception $e) {
    echo "Mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
}
?>