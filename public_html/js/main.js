/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// Garante que o código só será executado após o carregamento completo da página
$(document).ready(function() {

    // Função para limpar os campos de endereço
    function limpa_formulario_cep() {
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#estado").val("");
    }

    // Quando o campo CEP perde o foco (o usuário clica fora)
    $("#cep").blur(function() {

        // Pega o valor do CEP, removendo tudo que não for número
        var cep = $(this).val().replace(/\D/g, '');

        // Verifica se o CEP não está vazio e se tem 8 dígitos
        if (cep != "" && cep.length == 8) {

            // Mostra uma mensagem enquanto busca o CEP
            $("#rua").val("...");
            $("#bairro").val("...");
            $("#cidade").val("...");
            $("#estado").val("...");

            // Faz a requisição para a API ViaCEP
            $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function(dados) {

                if (!("erro" in dados)) {
                    // Se encontrou o CEP, atualiza os campos com os valores retornados
                    $("#rua").val(dados.logradouro);
                    $("#bairro").val(dados.bairro);
                    $("#cidade").val(dados.localidade);
                    $("#estado").val(dados.uf);
                    $("#numero").focus(); // Move o cursor para o campo número
                } else {
                    // Se o CEP não foi encontrado
                    limpa_formulario_cep();
                    alert("CEP não encontrado.");
                }
            });
        } else {
            // Se o CEP for inválido
            limpa_formulario_cep();
        }
    });
});

