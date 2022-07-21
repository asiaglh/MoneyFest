<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail=new PHPMailer(true);
$mail->CharSet='UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

//від кого лист
$mail->setFrom('halukh.anna@vnu.edu.ua', 'MoneyFest');
//кому лист
$mail->addAddress('annagaluh552@gmail.com');
//тема листа
$mail->Subject='Учим зарабатывать на криптовалюте с нуля!';

//тіло листа
$body='<h1>Пользователь<h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong>'.$_POST['name'].'</p>'
}

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Почта:</strong>'.$_POST['email'].'</p>'
}

if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Телефон:</strong>'.$_POST['tel'].'</p>'
}

$mail->Body=$body;

//відправляємо
if(!$mail->send()){
    $message='Ошибка';
}
else {
    $message='Данные отправлены!';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);

?>