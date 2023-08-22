<?php
header("Access-Control-Allow-Headers : Content-Type");
header("Access-Control-Allow-Methods : POST, OPTIONS");
header('Access-Control-Allow-Origin: *');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// ===================================================================

$data = json_decode(file_get_contents('php://input'), true);


$email = $data['email'];
$msg = $data['msg'];
$nome = $data['name'];
$tel = $data['tel'];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = ;
    $mail->SMTPAuth = ;
    $mail->SMTPSecure = ;
    $mail->Username = ;
    $mail->Password = ;
    $mail->Port = ;

    $mail->setFrom('');
    $mail->addAddress('');
    $mail->addAddress('');
    $mail->addReplyTo('');
    $mail->addEmbeddedImage('');

    $mail->isHTML(true);
    $mail->Subject = '';
    $mail->Body    ='<html>
    Coloque seu texto aqui
</html>';
    $mail->AltBody = 'teste';

    $mail->send();
    $response = ['success' => true, 'message' => 'E-mail enviado com sucesso'];
} catch (Exception $e) {
    $response = ['success' => false, 'message' => 'Erro ao enviar o e-mail: ' . $mail->ErrorInfo];
}

header('Content-Type: application/json');
echo json_encode($response);
?>
