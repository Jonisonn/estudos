function gerador_codigo()
{
  var bd = new Banco("alunos");
  var tamanho = bd.tamanho();
  if(!tamanho)
  {
    document.getElementById('cod_mat').value = "2018"+1;
  }
  else
  {
    var cod = +bd.listar().length;
    cod +=1;
    document.getElementById('cod_mat').value = "2018" + cod;
  }

}

// Selecionar todos os links do menu
var linksMenu =  document.querySelectorAll('a'); 
// Representa o hash (#) da página atual
var paginaAtual = '#home';
// Representa o hash (#) da página que deve ser aberta quando o usuário clica em um item do menu
var paginaDesejada = '';  


// Para cada link do menu, utilizar a função "alterarPagina" para lidar com as trocas de páginas
linksMenu.forEach(function(link){ 
  console.log(link);
  link.addEventListener('click', alterarPagina);
});

function alterarPagina(evt){
  // cancela a movimentação da barra de "rolagem" da página
  evt.preventDefault();
  //Mudar a tela de atualizar  (para pesquisar o usuário novamente)
  document.getElementById('atualizar_dados').className = "invisivel";
  document.getElementById('pesq_at').className="";
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

function salvar()
{
  var cod = document.getElementById('cod_mat').value;
  var nome = document.getElementById('nome').value;
  var nota1 = +document.getElementById('nota1').value;
  var nota2 = +document.getElementById('nota2').value;
  var aluno = new Estudante(cod, nome, nota1, nota2);
  aluno.media();
  var bd = new Banco('alunos');
  bd.inserir(aluno);
  alert("Aluno cadastrado com sucesso!");
  limpar(1);
}
function limpar(op)
{
  if(op==1)
    {
    document.getElementById('cod_mat').value = "";
    document.getElementById('nome').value = "";
    document.getElementById('nota1').value = "";
    document.getElementById('nota2').value = "";
    gerador_codigo();
    }
  else
    {
    document.getElementById('cod_mat_at').value = "";
    document.getElementById('nome_at').value = "";
    document.getElementById('nota1_at').value = "";
    document.getElementById('nota2_at').value = "";
    }
}
function pesquisar()
{
    var nome = document.getElementById('nome_pesq').value;
    var atributo = "cod";
    var bd = new Banco("alunos");
    var obj = bd.buscar(nome, atributo);
    var texto;
    texto = document.getElementById('resultado');
    texto.innerHTML="";
    if(obj)
    {
     
      texto.innerHTML ="<p>Aluno: " +obj.nome+"</p><p>Nota 1: "+obj.nota1+"</p><p>Nota 2: "+obj.nota2+"</p><p>Media: "+obj.media+"</p><p>Situação: ";
      if(obj.situacao.localeCompare("reprovado")==0)
      {
        texto.innerHTML +="<font color='red'> "+obj.situacao.toUpperCase()+"</font></p>_________________________";
      }
      else
      {
         texto.innerHTML +="<font color='blue'> "+obj.situacao.toUpperCase()+"</font></p>_________________________";
      }
    }
    else
    {
      texto.innerHTML="<h1> Aluno não cadastrado</h1>";
    }
}

function mostrar()
{
  var bd = new Banco("alunos");
  var vetor = bd.listar();
 
  var texto;
  texto = document.getElementById('lista');
  texto.innerHTML ="";
  for(var i=0;i<vetor.length;i++)
  {
    texto.innerHTML += "<p>Código Aluno: "+vetor[i].cod+"</p><p>Aluno: "+vetor[i].nome+"</p><p>Nota 1: "+vetor[i].nota1+"</p><p>Nota 2: "+vetor[i].nota2+"</p><p>Media: "+vetor[i].media+"</p><p>Situação: ";
    if(vetor[i].situacao.localeCompare("reprovado")==0)
      {
        texto.innerHTML +="<font color='red'> "+vetor[i].situacao.toUpperCase()+"</font></p>_________________________";
      }
    else
    {
       texto.innerHTML +="<font color='blue'> "+vetor[i].situacao.toUpperCase()+"</font></p>_________________________";
    }
  }
} 
function deletar()
{
  var bd = new Banco("alunos");
  var nome = document.getElementById('nome_rem').value;
  var obj = bd.buscar(nome, "nome");
  if(obj)
  {
    if(confirm("Elemento Encontrado! Deseja remover ?"))
    {
      bd.remover(nome, "nome");
      alert("Aluno: "+obj.nome+" removido com sucesso!");
    }
  }
  else
  {
    alert("Elemento não Encontrado");
  }
  document.getElementById('nome_rem').value= "";
}
function pesquisar_at(op)
{
    var nome = document.getElementById('nome_pesq_at').value;
    var atributo = "nome";
    var bd = new Banco("alunos");
    if(op == 1)
    {
      var obj = bd.buscar(nome, atributo);
      if(obj)
        {
        document.getElementById('atualizar_dados').className = "";
        document.getElementById('pesq_at').className="invisivel";
        document.getElementById('cod_mat_at').value = obj.cod;
        document.getElementById('nome_at').value = obj.nome;
        document.getElementById('nota1_at').value = obj.nota1;
        document.getElementById('nota2_at').value = obj.nota2;
       }
      else
      {
        alert("Aluno "+ nome+" não encontrado!");
        document.getElementById('nome_pesq_at').focus();
      }
    }
    else
    {
      var posicao = bd.pegar_posicao(nome, atributo);
      var cod = document.getElementById('cod_mat_at').value;
      var nome = document.getElementById('nome_at').value;
      var nota1 = +document.getElementById('nota1_at').value;
      var nota2 = +document.getElementById('nota2_at').value;
      var aluno = new Estudante(cod, nome, nota1, nota2);
      aluno.media();
      var bd = new Banco('alunos');
      bd.atualizar(posicao, aluno);
      alert("Dados do estudante atualizados com sucesso!");
       //Mudar a tela de atualizar  (para pesquisar o usuário novamente)
      document.getElementById('atualizar_dados').className = "invisivel";
      document.getElementById('pesq_at').className="";
      document.getElementById('nome_pesq_at').value= "";
      document.getElementById('nome_pesq_at').focus();

      limpar(2);
    }
}