<?php
    include_once("conexao.php");
    $nome = $_POST['nome'];
    $telefone = $_POST['telefone'];
    $email = $_POST['e-mail'];
    echo "<h1>$nome - $email</h1>";
    
    $result_usuario = "INSERT INTO contatinho(nome, telefone,email) VALUES ('$nome','$telefone','$email')";
    $resultado_usuario = mysqli_query($conn, $result_usuario);
    
    if(mysqli_affected_rows($conn) != 0)
    {
        echo " 
        <script type=\"text/javascript\">
            alert(\"Usuario cadastrado com Sucesso.\");
            window.location.href='index.html';
        </script>";
    }
    else
    {
        echo "
           <script type=\"text/javascript\">
                alert(\"O Usuario não foi cadastrado com Sucesso.\");
            </script>";    
    }
?>