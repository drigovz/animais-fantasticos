// Navegação por tabs
/*function initTabNav() {
    // 
    //  * uma boa prática para não se perder na hora de manipular elementos HTML pelo Javascritp é utilizando 
    //  * classes css específicas para a realização dessa manipulação. Para essas classes é interessante 
    //  * utilizar o prefixo js nas classes para identificar as classes que são manipuladas via JS
    //  *
    //  * Uma outra forma de realizar essa manipulação é utilizando os atributos/propriedades data- no HTML.
    //  

    // primeiro selecionamos cada li dentro da nossa lista
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    // verificamos se os itens acima existem na página, para caso eles não existam não executar nada e não dar erro 
    // no console, então só executa se os nodeLists acima forem maiores que 0 
    if (tabMenu.length > 0 && tabContent.length > 0) {
        // setamos o primeiro item do tabcontent como ativo para que quando a página carregar 
        // ele iniciar ativo e aparecendo na tela, pois se não setarmos esse primeiro item como ativo
        // nenhum item apareceria de inicio
        
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
}*/

// o ideal é sempre isolar os blocos de códigos dentro de funções para evitar conflitos de nomes de variávies
// etc, assim essas vairáveis ficam isoladas ao  escopo da função.
// initTabNav();

// accordion list
function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt'),
        // adicionamos uma classe CSS dentro de uma variável JS para não repetir um string 'ativo' muitas vezes e 
        // por se tratar de uma boa prática de programação, vá que no futuro desejamos trocar o nome da classe por exemplo
        // trocamos apenas uma vez o valor da string classeAtivo e está tudo certo.
        classeAtivo = 'ativo';

    if (accordionList.length > 0) {
        accordionList[0].classList.toggle(classeAtivo.trim());
        accordionList[0].nextElementSibling.classList.toggle(classeAtivo.trim());

        accordionList.forEach((lista, index) => {
            // adicionamos uma classe ativo para o conteúdo do item clicado aparecer 
            lista.addEventListener('click', () => {
                lista.classList.toggle(classeAtivo.trim());
                // adicionando uma classe CSS de ativo ao próximo elemento, que no nosso caso sempre vai ser um dd
                lista.nextElementSibling.classList.toggle(classeAtivo.trim());
            });
        });
    }
}

initAccordion();

function initScrollSuave() {
    // scrool suave 
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event) {
        // evitando o comportamento padrão ao clicar em um link
        event.preventDefault();
        // pegamos o href do item que clicamos 
        const href = event.currentTarget.getAttribute('href');

        // agora selecionamos a seção do site que possui o seu id igual a o href do link que estamos passando 
        const section = document.querySelector(href);

        // pegar altura da div em ralação ao topo do site 
        const topo = section.offsetTop;

        // essa é uma forma de realizar o scroll 
        // // rolar até a seção desejada, o escrollTo recebe um objeto como parâmetros, e esse objeto possui:
        // // primeiro o eixo X para mover na horizontal e o 
        // // segundo é para mover na vertical, eixo Y
        // // depois tem a opção behavior que é o comportamento desse link 
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // });

        // a outra forma é utilizando o scrollIntoView() que é um método que põe o elemento na visão 
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // propriedade que vai alinhar o scroll até o início da seção        
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollSuave();


function initAnimacaoScroll() {
    // scroll de seções do site
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const windowMetade = window.innerHeight * 0.6; // retornando 60% do tamanho da tela do usuário

    if (sections.length > 0) {
        function animaScroll() {
            sections.forEach((section) => {
                // pega o valor do elemento em relação ao topo da página
                const sectionTop = section.getBoundingClientRect().top;
                // abaixo fizemos um cáculo para ativar a função somente a partir da metade da tela do usuário 
                const isSectionVisible = (sectionTop - windowMetade) < 0
                // verifica se é isSectionVisible é uma variável verdadeira, ou seja, o usuário passou da metade da tela
                if (isSectionVisible) {
                    section.classList.add('ativo');
                    // verificamos se ele tem a classe ativo, se sim, removemos 
                } else if (section.classList.contains('ativo')) {
                    section.classList.remove('ativo');
                }
            });
        }

        // chamamos a função para ela ativar e tornar visível o conteúdo já no momento do carregamento do site
        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();



// // exercícios de string 
// // utilizando o foreach no array abaixo, some os valores de taxa, e os valores de recebimento
// const transacoes = [
//     {
//         descricao: 'Taxa de Pão',
//         valor: 'R$ 39'
//     },
//     {
//         descricao: 'Taxa de mercado',
//         valor: 'R$ 129'
//     },
//     {
//         descricao: 'Recebimento de cliente',
//         valor: 'R$ 99'
//     },
//     {
//         descricao: 'Taxa do banco',
//         valor: 'R$ 129'
//     },
//     {
//         descricao: 'Recebimento de cliente',
//         valor: 'R$ 49'
//     }
// ];

// let taxaTotal = 0,
//     recebimentoTotal = 0;

// transacoes.forEach((item) => {
//     if (item.descricao.startsWith('Taxa')) {
//         let valorTaxa = +item.valor.replace('R$', '').trim();
//         taxaTotal += valorTaxa;
//     } else if (item.descricao.startsWith('Recebimento')) {
//         let valorRecebimento = +item.valor.replace('R$', '').trim();
//         recebimentoTotal += valorRecebimento;
//     }
// });

// console.log(`Valor de total das taxas = ${taxaTotal}`);
// console.log(`Valor de total do recebimento = ${recebimentoTotal}`);

// // retornar o maior número da lista
// const numeros = '4, 5, 20, 8, 9';
// const arrayNumeros = numeros.split(', ');
// const numeroMaximo = Math.max(...arrayNumeros);

// // criar uma função para limpar os preços e retornar os números com centavos arredondados
// // depois retornar a soma total 
// const listaPrecos = ['R$ 59,99', 'R$ 100,225', 'R$ 230', 'r$ 200'];

// function limparPreco(preco) {
//     preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
//     preco = +preco.toFixed(2);
//     return preco;
// }

// let soma = 0;

// listaPrecos.forEach((item) => {
//     soma += limparPreco(item);
// });

// // formatar e exibir o valor em valor monetário
// console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));


// // exercícos de array 
// // remova o primeiro valor de comidas e coloque em uma variável
// // remova o último valor de comidas e coloque em uma variável
// // adicione 'Arroz' ao final do array 
// // adicione 'Peixe' e 'Batata' ao início do array
// const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// const pimeiroItem = comidas.shift();
// const ultimoItem = comidas.pop();

// // adicionando dois ítens ao início do array
// comidas.unshift('Peixe', 'Batata');

// // adicionando ítens ao final do array 
// comidas.push('Arroz');


// // Arrume os estudantes em ordem alfabética 
// // Inverta a ordem dos estudantes 
// // Verifique se Joana faz parte dos estudantes 
// // verifique se Juliana faz parte dos estudantes 
// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

// const estudantesOrdemAlfabetica = estudantes.sort();
// console.log(estudantesOrdemAlfabetica);

// const estudantesOrdemInvertida = estudantes.reverse();
// console.log(estudantesOrdemInvertida);

// const verificaJoana = estudantes.includes('Joana');
// console.log(verificaJoana);

// const verificaJuliana = estudantes.includes('Juliana');
// console.log(verificaJoana);


// // substitua as tags 'section' por 'ul' e 'div' por 'li'
// let html = `<section>
//                 <div>Sobre</div>
//                 <div>Produtos</div>
//                 <div>Contato</div>
//             </section>`;

// html = html.split('section').join('ul').split('div').join('li');
// console.log(html);

// // remova o último carro, mas antes de remover
// // salve uma cópia do array original em outra variável
// const carros = ['ford', 'Fiat', 'VW', 'Honda'];

// // realizando bacup do array
// const copiaCarros = carros.slice();

// // remover último ítem do array
// carros.pop();

// console.log('Backup', copiaCarros);
// console.log('Original', carros);



// const aulas = [10, 25, 30];
// const total1 = aulas.reduce((acumulador, atual) => {
//     return acumulador + atual;
// });
// total1; // 65

// const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
// total2; // 165
