// Seleciona todos os botões com a classe .btn-proximo
const avanca = document.querySelectorAll('.btn-proximo');

// Adiciona um evento de clique para cada botão
avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Encontra o passo atual que está visível (com a classe .ativo)
        const atual = document.querySelector('.ativo');
        
        // Pega o número do próximo passo a partir do atributo "data-proximo"
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        
        // Remove a classe .ativo do passo atual
        atual.classList.remove('ativo');
        
        // Verifica se o próximo passo existe antes de tentar adicionar a classe .ativo
        const proximoElemento = document.getElementById(proximoPasso);
        
        if (proximoElemento) {
            // Adiciona a classe .ativo ao próximo passo, tornando-o visível
            proximoElemento.classList.add('ativo');
        } else {
            // Caso o próximo passo não exista, pode adicionar alguma ação, como um alerta.
            console.log('Próximo passo não encontrado!');
        }
    });
});