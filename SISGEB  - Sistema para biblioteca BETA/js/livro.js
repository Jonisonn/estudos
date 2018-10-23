class Livro
{
	constructor(nome, autor, codigo, ano, editora, edicao, area, paginas, estado, quantidade, q_empres)
	{
		this.nome = nome;
		this.autor = autor;
		this.codigo = codigo
		this.ano = ano;
		this.editora = editora;
		this.edicao = edicao;
		this.area = area;
		this.paginas = paginas;
		this.estado = estado;
		this.quantidade = quantidade;
		this.quant_empres = q_empres;
		this.diponivel = q_empres; //Esse atributo servirá como contador para saber quando o livro não esta mais disponivel para empréstimo
	}
}