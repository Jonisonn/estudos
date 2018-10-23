class Estudante{
	constructor(cod, nome, nota1, nota2)
	{
		this.cod = cod;
		this.nome = nome;
		this.nota1 = nota1;
		this.nota2 = nota2;
		this.media;
		this.situacao;
	}
	get_cod()
	{
		return this.cod;
	}
	set_cod(codigo)
	{
		this.cod = codigo;
	}
	media()
	{
		this.media = (this.nota1 + this.nota2)/2;
		if(this.media>=7)
		{
			this.situacao="aprovado";
		}
		else
		{
			this.situacao="reprovado";
		}
	}
}