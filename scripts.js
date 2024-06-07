$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        
        // Coletando os dados do formulário
        var nome = $('#nome').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var senha = $('#senha').val();
        var confirmar_senha = $('#confirmar_senha').val();

        // Validação básica de senha
        if (senha !== confirmar_senha) {
            alert('As senhas não coincidem.');
            return;
        }

        // Exibindo os dados no console (pode ser substituído por lógica de envio)
        console.log({
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha
        });

        alert('Formulário enviado com sucesso!');
    });
});
