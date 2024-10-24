// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Função para rolagem suave
function smoothScroll(targetId) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Adiciona um evento de clique para cada link
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Obtém o ID do alvo
        smoothScroll(targetId); // Chama a função de rolagem suave
    });
});

// Adiciona evento de submit ao formulário
const form = document.querySelector('#contato form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Exibe um feedback visual
    const submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Desabilita o botão para evitar múltiplos envios
    submitButton.textContent = 'Enviando...'; // Mensagem de carregamento

    setTimeout(() => {
        alert('Mensagem enviada!'); // Exibe uma mensagem de confirmação
        form.reset(); // Reseta os campos do formulário
        submitButton.disabled = false; // Reabilita o botão
        submitButton.textContent = 'Enviar'; // Restaura a mensagem do botão
    }, 1000); // Simula um envio com delay
});

// Função para alternar a visibilidade do menu
function toggleMenu() {
    const menu = document.querySelector('nav');
    menu.classList.toggle('show'); // Adiciona ou remove a classe 'show' ao menu
}
// Adiciona evento de clique no ícone do menu
const menuIcon = document.querySelector('#menu-icon');
menuIcon.addEventListener('click', toggleMenu);
