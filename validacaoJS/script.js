function validarCadastro() {

    var nome = document.getElementById('nome').value

    var endereco = document.getElementById('endereco').value

    var bairro = document.getElementById('bairro').value

    var cep = document.getElementById('cep').value

    var cidade = document.getElementById('cidade').value

    var estado = document.getElementById('estado').value

    var telefone = document.getElementById('telefone').value

    var fixo = document.getElementById('fixo').value

    var celular = document.getElementById('celular').value

    var rg = document.getElementById('rg').value

    var cpf = document.getElementById('cpf').value



    if (nome != "") {

        console.log("Nome Preenchido")

    } else {

        console.log("Nome não preenchido")

    }



    if (endereco != "") {

        console.log("Endereço Preenchido")

    } else {

        console.log("Endereço não preenchido")

    }



    if (bairro != "") {

        console.log("Bairro Preenchido")

    } else {

        console.log("Bairro não preenchido")

    }



    if (cep.length < 8) {

        console.log("CEP Inválido")

    } else {

        console.log("CEP Válido")

    }



    if (cidade != "") {

        console.log("Cidade Preenchido")

    } else {

        console.log("Cidade não preenchido")

    }



    if (estado != "") {

        console.log("Estado Preenchido")

    } else {

        console.log("Estado não preenchido")

    }



    if (telefone != "") {

        console.log("Telefone Preenchido")

    } else {

        console.log("Telefone não preenchido")

    }



    if (fixo != "") {

        console.log("Fixo Preenchido")

    } else {

        console.log("Fixo não preenchido")

    }



    if (celular != "") {

        console.log("Celular Preenchido")

    } else {

        console.log("Celular não preenchido")

    }


    if (rg.length < 9) {

        console.log("RG Inválido")

    } else {

        console.log("RG Válido")

    }


    if (validarCPF(cpf)) {
        console.log('CPF Válido!')
    } else {
        console.log('CPF Inválido!')
    }

}

function validarCPF(cpf) {
    var soma;
    var Resto;
    soma = 0;
    if (cpf == "00000000000") return false;

    for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    Resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    Resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}