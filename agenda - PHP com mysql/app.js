// Selecionar todos os links do menu
var linksMenu =  document.querySelectorAll('a'); 
// Representa o hash (#) da página atual
var paginaAtual = '#home';
// Representa o hash (#) da página que deve ser aberta quando o usuário clica em um item do menu
var paginaDesejada = '';  
// Para cada link do menu, utilizar a função "alterarPagina" para lidar com as trocas de páginas
linksMenu.forEach(function(link){ 
  //console.log(link);
  link.addEventListener('click', alterarPagina);
});
function alterarPagina(evt){
  // cancela a movimentação da barra de "rolagem" da página
  evt.preventDefault();
 // console.log(evt);
  // esconde a página atual
  document.querySelector(paginaAtual).style.display = 'none';
  // o hash (# que está no href) passa a ser a página desejada
  paginaDesejada = evt.target.hash; 
  // "mostra" a página desejada
  document.querySelector(paginaDesejada).style.display = 'block';
  // faz com que a página atual seja a página desejada, já que ela foi aberta 
  paginaAtual = paginaDesejada;  
}

function principal()
{
  }