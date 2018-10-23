//adiciona mascara ao CPF
function MascaraCPF(cpf){
        if(mascaraInteiro(cpf)==false){
                event.returnValue = false;
        }       
        return formataCampo(cpf, '000.000.000-00', event);
}
//adiciona mascara ao telefone
function MascaraTelefone(tel){
    if(mascaraInteiro(tel)==false)
    {
        event.returnValue = false;
    }
    return formataCampo(tel, '(00) 00000-0000', event);
}


//valida numero inteiro com mascara
function mascaraInteiro(){
    if (event.keyCode < 48 || event.keyCode > 57){
            event.returnValue = false;
            return false;
    }
    return true;
}
//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) { 
    var boleanoMascara; 

    var Digitato = evento.keyCode;
    exp = /\-|\.|\/|\(|\)| /g
    campoSoNumeros = campo.value.toString().replace( exp, "" ); 

    var posicaoCampo = 0;    
    var NovoValorCampo="";
    var TamanhoMascara = campoSoNumeros.length;; 

    if (Digitato != 8) { // backspace 
            for(i=0; i<= TamanhoMascara; i++) { 
                    boleanoMascara  = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                                                            || (Mascara.charAt(i) == "/")) 
                    boleanoMascara  = boleanoMascara || ((Mascara.charAt(i) == "(") 
                                                            || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " ")) 
                    if (boleanoMascara) { 
                            NovoValorCampo += Mascara.charAt(i); 
                              TamanhoMascara++;
                    }else { 
                            NovoValorCampo += campoSoNumeros.charAt(posicaoCampo); 
                            posicaoCampo++; 
                      }              
              }      
            campo.value = NovoValorCampo;
              return true; 
    }else { 
            return true; 
    }
}

function emprestar()
{
    if(emp_cpf.value == "")
    {
        aviso(1, emp_cpf)
    }  
    if(emp_cod_livro.value == "")
    {
        aviso(2,emp_cod_livro);
    }
    if(emp_data.value == "")
    {
        aviso(3,emp_data)
    }
    if(emp_dataDev.value == "")
    {
        aviso(4, emp_dataDev)
    }
}

function aviso(op, obj)
{
    var mensagem = document.getElementById("texto");
    switch (op)
    {
        case 1:
            mensagem.innerHTML = "Favor, preencher o cpf";            
        break;
        case 2:
            mensagem.innerHTML = "Favor, preencher o livro";
        break;
        case 3:
            mensagem.innerHTML = "Favor, preencher a data de empréstimo";
        break;
        case 4:
            mensagem.innerHTML = "Favor, preencher a data de devolução";
        break;
    }
    var foot = document.getElementById("rodape");
    foot.innerHTML = "<button class='botao' onclick='esconder_modal()'>Voltar</button>";
    modal.style.display = "block";
    obj.focus();
}
