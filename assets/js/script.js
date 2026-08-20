/* --- copia email --- */
copiaEmail();

function copiaEmail() {
    const emailLink = document.querySelector('.btn-copia');
    const emailIcon = document.querySelector('#icone-email');
    const emailText = document.querySelector('#texto-email');

    emailLink.addEventListener('click', (e) => {
        e.preventDefault();

        const email = emailLink.getAttribute('data-email');

        // area de transferencia 
        navigator.clipboard.writeText(email).then(() => {
            
            emailLink.classList.add('copiado-sucesso');

            // troca de icones
            emailIcon.classList.remove('fa-envelope');
            emailIcon.classList.add('fa-check');

            const textoOriginal = emailText.innerText;
            emailText.innerText = "Copiado!";

            setTimeout(() => {
                emailLink.classList.remove('copiado-sucesso');
                emailIcon.classList.remove('fa-check');
                emailIcon.classList.add('fa-envelope');
                emailText.innerText = textoOriginal;
            }, 2000);
        });
    });
}

/* -- typewriter effect -- */
typeEffectHtml();

function typeEffectHtml() {
    const elementoTexto = document.querySelector('.digitando-texto');
    const texts = ['Fullstack', 'React', '.NET (C#)'];

    let textoIndice = 0;
    let charIndice = 0;
    let apagando = false;

    typeEffect();

    function typeEffect() {
        
        const textoAtual = texts[textoIndice];

        if (apagando) {
            elementoTexto.textContent = textoAtual.substring(0, charIndice - 1);
            charIndice--;
        } else {
            elementoTexto.textContent = textoAtual.substring(0, charIndice + 1);
            charIndice++;
        }

        let veloDigitacao = apagando ? 100 : 200;

        if (!apagando && charIndice === textoAtual.length) {
            veloDigitacao = 2000; 
            apagando = true;
        } else if (apagando && charIndice === 0) {
            apagando = false;
            textoIndice = (textoIndice + 1) % texts.length;
            veloDigitacao = 500;
        }

        setTimeout(typeEffect, veloDigitacao);
}}

/* --- Scroll Reveal (fade in) */
ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-conteudo, .titulo-cv', { origin: 'top' });

ScrollReveal().reveal('.home-img, .projetos, .lista-contato-pacote', { origin: 'bottom' });

ScrollReveal().reveal('.home-conteudo h1, .sobre-mim img', { origin: 'left' });

ScrollReveal().reveal('.home-conteudo p, .sobre-mim-content', { origin: 'right' });

ScrollReveal().reveal('.proj-box, .metrica-item', { interval: 150 });

/* --- Menu mobile --- */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav ul');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        const menuIconSymbol = menuIcon.querySelector('i');
        const isOpen = navbar.classList.toggle('active');

        menuIcon.setAttribute('aria-expanded', String(isOpen));
        menuIcon.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        menuIconSymbol.classList.toggle('fa-bars', !isOpen);
        menuIconSymbol.classList.toggle('fa-xmark', isOpen);
    };

    navbar.onclick = () => {
        const menuIconSymbol = menuIcon.querySelector('i');

        menuIcon.setAttribute('aria-expanded', 'false');
        menuIcon.setAttribute('aria-label', 'Abrir menu');
        menuIconSymbol.classList.add('fa-bars');
        menuIconSymbol.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };
}
