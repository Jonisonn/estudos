<?php
    include_once("conexao.php");
    $nome = $_POST['nomeB'];  
    $result_usuario = "SELECT nome,telefone, email from contatinho WHERE nome ='$nome'";
    $dados = mysqli_query($conn, $result_usuario);
    // transforma os dados em um array
    $linha = mysqli_fetch_assoc($dados);
    // calcula quantos dados retornaram
    $total = mysqli_num_rows($dados);
     // se o número de resultados for maior que zero, mostra os dados
    if($total > 0) {
        // inicia o loop que vai mostrar todos os dados
        do {
            $valor = "<p>Contato: ".$linha['nome']."</p>"."<p>Telefone: ".$linha['telefone']."</p>"."<p>E-mail:".$linha['email']."</p>";
        // finaliza o loop que vai mostrar os dados
        }while($linha = mysqli_fetch_assoc($dados));
        echo "<script>
        document.getElementById('mostrarB').className=''; 
        var texto = document.getElementById('mostrarB');
        texto.innerHTML = .$valor;
        windows.location.href='index.html'";
        
    // fim do if 
    }
    else
    {
        echo "
           <script type=\"text/javascript\">
                alert(\"O Usuario não foi cadastrado com Sucesso.\");
            </script>";    
    }
?>