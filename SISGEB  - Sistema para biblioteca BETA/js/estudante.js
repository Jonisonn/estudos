class Estudante
{
	constructor(nome, cpf, dt_nasc, curso, matricula, telefone, email)
	{
		this.nome_completo = nome ;
		this.cpf = cpf;
		this.dt_nasc = dt_nasc;
		this.curso = curso;
		this.matricula = matricula;
		this.telefone = telefone;
		this.email = email;
		this.multa = false;
		this.data_multa = ""
	}
}