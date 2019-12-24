// Navegação por tabs

/**
 * uma boa prática para não se perder na hora de manipular elementos HTML pelo Javascritp é utilizando 
 * classes css específicas para a realização dessa manipulação. Para essas classes é interessante 
 * utilizar o prefixo js nas classes para identificar as classes que são manipuladas via JS
 *
 * Uma outra forma de realizar essa manipulação é utilizando os atributos/propriedades data- no HTML.
 * */

// primeiro selecionamos cada li dentro da nossa lista
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

/* verificamos se os itens acima existem na página, para caso eles não existam não executar nada e não dar erro 
no console, então só executa se os nodeLists acima forem maiores que 0 */
if (tabMenu.length > 0 && tabContent.length > 0) {
    /* setamos o primeiro item do tabcontent como ativo para que quando a página carregar 
       ele iniciar ativo e aparecendo na tela, pois se não setarmos esse primeiro item como ativo
       nenhum item apareceria de inicio
    */
    tabContent[0].classList.add('ativo');

    // função que vai adicionar uma classe para tornar ativo as sections que possuem o conteúdo para ser exibido 
    function activeTab(index) {
        // remove a classe ativo de todos os outros li do tabContent
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });

        // adicionando a classe ativo a um item do tabContent
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            // chama a função passando o index de cada item do loop como argumento para a função activeTab
            activeTab(index);
        });
    });
}

