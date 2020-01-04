
export default function initTabNav() {

    const botaoAbrir = document.querySelector('[data-modal="abrir"]'),
        botaoFechar = document.querySelector('[data-modal="fechar"]'),
        containerModal = document.querySelector('[data-modal="container"]');

    if (botaoAbrir && botaoFechar && containerModal) {
        function toggleModal(event) {
            // preventDefault() - para impedir que a página recarregue quando o usuário 
            // clicar no botão, impedir o comportamento padrão do elemento
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }

        // function fecharModal(event) {
        //     event.preventDefault();
        //     containerModal.classList.toggle('ativo');
        // }

        function cliqueForaModal(event) {
            event.preventDefault();

            // identificando onde foi que o usuário clicou com o eventTarget para que 
            // quando ele clicar dento do modal, o mesmo não feche, e feche apenas 
            // quando ele clicar fora do modal.
            // identificamos através do event.target, quando ele for o elemento container nós podemos
            // fechar o modal. nesse caso podemos referenciar o containerModal como o this 
            // isso porque a função cliqueForaModal está sendo chamada no evento click 
            // do elemento containerModal, que é o mesmo que queremos verificar 
            //  com o this estamos fazendo referência a ele mesmo 
            //if (event.target === containerModal) {
            if (event.target === this) {
                toggleModal(event);
            }
        }

        botaoAbrir.addEventListener('click', toggleModal);
        botaoFechar.addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
};

