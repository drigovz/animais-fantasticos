
export default function initTooltip() {
    const tootilps = document.querySelectorAll('[data-tooltip=""]');

    tootilps.forEach((item) => {
        // evento mouse over é como se fosse o hover do CSS, quando passa o mouse por cima do elemento
        item.addEventListener('mouseover', onMouseOver);
    });

    // função que ocorrerá quando o usuário passar o mouse por cima do elemento 
    function onMouseOver(event) {
        // passamos o elemento que está com o mouse por cima para a criação do tooltip
        const constTooltipBox = criarTooltipBox(this);

        // estamos chamando o objeto que é responsável por fazer com que o tooltip acompanhe o mouse         
        onMouseMove.tooltipBox = constTooltipBox;
        // adicionamos o evento para o tooltip ir aconpanhando o mouse 
        this.addEventListener('mousemove', onMouseMove);

        // aqui adicionamos um novo evento ao elemento quando ele passa o mouse por cima do elemento
        // essa função vai ser responsável por remover o tooltip da tela
        // para esse novo evento estamos passando um objeto ao invés de uma função de callback

        // adicionamos a propriedade do objeto tooltipBox o valor da nossa constTooltipBox que criamos 
        onMouseLeave.tooltipBox = constTooltipBox;
        // abaixo estamos informando que o elementoHTML vai ser o valor de this, ou seja, o elemento que está com o mouse em cima 
        onMouseLeave.elementoHTML = this;
        this.addEventListener('mouseleave', onMouseLeave);
    }

    // criamos o objeto que vamos passar pra o evento mouseleave que é quando o usuário tirar o mouse de cima do elemento
    const onMouseLeave = {
        // tooltipBox: '',
        // // abaixo criamos uma propriedade para receber o elemento que queremos 
        // elementoHTML: '',
        // o método handleEvent() é obrigatório em todos os objetos que formos passar no addEventListener() ao invés de uma função de callback
        handleEvent(event) {
            this.tooltipBox.remove();

            // abaixo removemos o evento 'mouseleave' da escuta de eventos do browser assim que o usuário tirar o mouse de cima do elemento HTML
            this.elementoHTML.removeEventListener('mouseleave', onMouseLeave);
            // remover o onMouseMove da escuta de eventos do browser  
            this.elementoHTML.removeEventListener('mousemove', onMouseMove);
        }
    };

    // função que irá criar uma nova div no documento HTML
    function criarTooltipBox(element) {
        // criando um novo elemento HTML
        const tooltipBox = document.createElement('div');
        // nessa div vamos adicionar o texto do elemento que passarmos o mouse por cima 
        // no caso estamos puxando o texto do aria-label
        const textAriaLabel = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = textAriaLabel.toString().trim();
        // adicionamos esse novo elemento que estamos criando no final do corpo do documento HTML
        document.body.appendChild(tooltipBox);
        return tooltipBox;
    }

    // o objeto abaixo vai servir para a tooltip acmpanhar o mouse onde ele for se movendo dentro do elemento HTML
    const onMouseMove = {
        handleEvent(event) {
            // abaixo estamos pegando os valores do eixo X e do eixo Y do mouse em relação à página do usuário
            // concatenamos os valores com o px para ser interprado como se fosse valores escritos em CSS
            // somamos o valor do event.pageY e do event.pageX com mais 20px para que o tooltip não fique muito perto do mouse do usuário
            this.tooltipBox.style.top = event.pageY + 20 + 'px';
            this.tooltipBox.style.left = event.pageX + 20 + 'px';
        }
    }

}