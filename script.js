// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Adiciona um evento de clique para cada link
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Obtém o ID do alvo

        // Faz a rolagem suave até a seção correspondente
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Adiciona um evento de submit ao formulário
const form = document.querySelector('#contato form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    alert('Mensagem enviada!'); // Exibe uma mensagem de confirmação
    form.reset(); // Reseta os campos do formulário
});
