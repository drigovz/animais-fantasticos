//  função que vai verificar se o click do dropdown foi do lado de fora dele, para caso for, podermos fechar o mesmo 
// o parâmetro que passamos e chamamos de callback é uma função que estamos passando 
// o parâmetro events é o tipo de evento que está sendo passado para o outsideClick
export default function outsideClick(element, events, callback) {
    // primeira coisa a se fazer é selecionar o elemento HTML para saber se o usuário clicou nele
    const html = document.documentElement;

    // adicionamos o data-outside em uma constante pq vamos utiliza-lo mais de uma vez 
    const dataOutside = 'data-outside';

    // abaixo verificamos se o data-outside está definido como atributo do elemento, pois se ele não estiver  
    // nós queremos que o código abaixo seja executado, impedindo que muitos eventos sejam incluidos no 
    // event listener do browser 
    if (element.hasAttribute(dataOutside) === false) {

        // adicionamos o evento de clique ou do evento touchstart, ou qualquer outro evento já que o events pode ser qualquer
        // evento que estamos passando ao HTML
        events.forEach(item => {
            // usamos o setTimeout porque esse é um método assincrono e faz com que o 'html.addEventListener(item, handleOutsideClick);' aconteça 
            // idependente da espera do resto da execução do código, nesse caso ele executa a função antes dela entrar na fase de bubble
            // isso significa que ele vai até o html, ainda não vai existir o addEventListener, porque ele estará na fila por conta do 
            // setTimeout, e aí só quando terminou a fase de bubble e todo o resto ele vai adicionar o addEventListener ao HTML
            // ou seja, assim ele não está ativando o callback de primeira
            setTimeout(() => {
                html.addEventListener(item, handleOutsideClick);
            });
        }, 0);

        // abaixo adicionamos um atributo ao element para indicar que já adicionamos esse evento ao elemento 
        // e com isso impedimos que o usuário saia gerando um novo evento a cada clique que ele der no 
        // documento HTML            
        element.setAttribute(dataOutside, '');
    }

    // função que vai fazer as verificações de cliques
    function handleOutsideClick(event) {
        // verificamos se o elemento que está sendo clicado é realmente um elemnto que está fora do dropdown ou é 
        // o próprio dropdown
        // ou seja, faremos o seguinte, verificamos se o dropdown (this que aqui estamos chamando ele de element) contém o evente target que é 
        // onde o usuário está clicando no momento
        if (element.contains(event.target) === false) {
            // removemos o atributo data-outside quando um clique peleo usuário for dado do lado de fora do dropdown
            element.removeAttribute(dataOutside);

            // limpamos a lista de eventos do browser, pra não ficar muitos eventos no event listener
            // pois cada clique do usuário gera um evento no nosso documento HTML
            events.forEach(item => {
                html.removeEventListener(item, handleOutsideClick);
            });
            // aqui estamos ativando a função de callback que foi passada no outsideClick como parâmetro
            callback();
        }
    }
};