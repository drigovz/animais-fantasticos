import outsideClick from './outside-click.js';


export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown=""]');

    dropdownMenus.forEach(menu => {
        // touchstar - evento nativo do JS dedicado a mobile, semelhante ao clique, 
        // porém, o click leva 300 milessegundos pra iniciar, o touchstart é instantâneo
        // iremos adicionar os dois ao dropdown
        const userEvents = ['touchstart', 'click'];

        userEvents.forEach(item => {
            // dessa forma para cada um dos eventos 'click' e 'touchstart' passamos a função de callback
            menu.addEventListener(item, handleClick);
        });
    });

    function handleClick(event) {
        event.preventDefault();

        const userEvents = ['touchstart', 'click'];

        // aqui abaixo o this (dropdown-menu) estamos adicionando uma classe 
        this.classList.add('ativo');

        // aqui passamos o próprio elemento dropdown-menu com o this e uma função de callback
        // também passamos o userEvents com todos os eventos que podem ser adicionados ao elemento 
        outsideClick(this, userEvents, () => {
            // aqui estamos removendo a classe ativo para que o dropdown feche 
            this.classList.remove('ativo');
        });
    };
};