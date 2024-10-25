const avanca = document.querySelectorAll(".btn-proximo");

avanca.forFach(button => {
    button.addEventListener('click', function({
        const atual = document.querySelector(".ativo");
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementBiyld(proximoPasso).classList.add('ativo');
    })
})