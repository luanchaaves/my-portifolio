<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die("Método não permitido");
}
var_dump($_POST);
die();

    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $celular = addcslashes($_POST['celular']);
    $mensagem = addcslashes($_POST['mensagem']);

    $para = "luanchaves1011@gmail.com";
    $assunto = "Coleta de dados - LCTECH";

    $corpo =  "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Celular: ".$celular."\n"."Mensagem: ".$mensagem;

     $cabeca = "From luanchaves1011@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

     if(mail($para, $assunto, $corpo, $cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o e-mail, tente mais tarde!");
    }
?>