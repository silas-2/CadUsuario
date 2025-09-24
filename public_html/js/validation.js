/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
$(document).ready(function() {

    // Adiciona um "ouvinte" para o evento de submissão do formulário
    $('#cadastroForm').submit(function(event) {
        
        // Impede o comportamento padrão do formulário (que seria recarregar a página)
        event.preventDefault();

        var formValido = true;

        // Função para validar um campo
        function validarCampo(campoId) {
            var campo = $('#' + campoId);
            if (campo.val().trim() === '') {
                // Adiciona uma classe de erro do Bootstrap e foca no campo
                campo.addClass('is-invalid');
                formValido = false;
                return false;
            } else {
                // Remove a classe de erro se o campo for preenchido
                campo.removeClass('is-invalid');
                return true;
            }
        }

        // Função para validar o email com Expressão Regular (Regex)
        function validarEmail() {
            var emailCampo = $('#email');
            var email = emailCampo.val();
            // Esta expressão regular verifica o formato básico de um e-mail
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (regex.test(email)) {
                emailCampo.removeClass('is-invalid');
                return true;
            } else {
                emailCampo.addClass('is-invalid');
                formValido = false;
                return false;
            }
        }

        // Valida cada campo obrigatório
        validarCampo('nome');
        validarCampo('sobrenome');
        validarCampo('senha');
        validarCampo('cep');
        validarCampo('rua');
        validarCampo('bairro');
        validarCampo('cidade');
        validarCampo('estado');
        validarCampo('numero');

        // Valida o campo de e-mail separadamente com a regex
        validarEmail();
        
        // Se, após todas as validações, o formulário continuar válido...
        if (formValido) {
            alert('Cadastro realizado com sucesso!');
            // Aqui você poderia, em um projeto real, enviar os dados para um servidor.
            // Por enquanto, vamos apenas limpar o formulário.
            $('#cadastroForm')[0].reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        }
    });

    // Remove a borda vermelha de erro enquanto o usuário digita
    $('#cadastroForm input').on('input', function() {
        if ($(this).val().trim() !== '') {
            $(this).removeClass('is-invalid');
        }
    });

});

