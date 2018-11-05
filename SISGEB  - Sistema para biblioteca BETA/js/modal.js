// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
 function agoravai(op) {
 	var mensagem = document.getElementById("texto");
 	var footer = document.getElementById('rodape_modal');
 	switch(op)
 	{
 		case 1: 	
	 		mensagem.innerHTML = "Aluno não encontrado!";
	 		footer.innerHTML = "<button class= 'botao' onclick=\"tela('#aluno')\">Cadastrar</button>  <button class='botao' onclick='esconder_modal()'>Voltar</button>";
 			break;
 		case 2:
 			mensagem.innerHTML = "Livro não encontrado!";
 			footer.innerHTML = "<button class= 'botao' onclick=\"tela('#livro')\">Cadastrar</button>  <button class='botao' onclick='esconder_modal()'>Voltar</button>";
 			break;
 		case 3:
 			mensagem.innerHTML = "Verifique o CPF e/ou livro informado";
 	}		footer.innerHTML = "<button class='botao' onclick='esconder_modal()'>Voltar</button>";
 			break;
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function esconder_modal()
{
	modal.style.display = "none";
}