
// importamos o clique do lado de fora para que funcione no menu mobile
import outsideClick from './outside-click.js';

export default function initMenuMobile() {

    const menuButton = document.querySelector('[data-menu="button"]'),
        menuList = document.querySelector('[data-menu="lista"]'),
        eventos = ['click', 'touchstart'];

    if (menuButton) {
        function openMenu(event) {
            menuList.classList.add('ativo');
            menuButton.classList.add('ativo');

            // adicionando a função para desativar o controle quando clicar fora 
            // primeiro passa quando o elemento que queremos que feche quando clicarmos fora 
            // o segundo parâmetro são os eventos que eu quero que sejam os gatilhos pra fechar o menu
            // o evento touchstart é para quando o usuário clicar o site responder na mesma hora, sem nenhum atraso natural
            // por fim passamos a função de callback
            outsideClick(menuList, eventos, () => {
                menuList.classList.remove('ativo');
                menuButton.classList.remove('ativo');
            });
        }

        // adicionando o evento de click ou touchstart ao botão de menu
        eventos.forEach((evento) => {
            menuButton.addEventListener(evento, openMenu);
        });
    }
};