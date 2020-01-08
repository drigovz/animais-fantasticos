
export default function initAnimaNumeros() {

    function animaNumeros() {
        const numeros = document.querySelectorAll('[data-numero]');

        // o primeiro paso é extrair cada valor de cada número 
        numeros.forEach((numero) => {
            // como os valores dos números são uma string, adicionando um + na frente, convertemos eles para numeros
            const total = +numero.innerText;

            // um problema é que com números muito grandes, os spans que possuam um número menor por exemplo 230, acabam a contagem 
            // mais rápido que números muito grandes, ou seja, os números grandes ainda ficam na contagem, enquanto números pequenos
            // ficam parados já finalizados.
            // para solucionar esse problema, podemos utilizar um número que seja relativo a o valor total do span
            // podemos então dividir esse número por 100 e 
            // utilizando o floor arredondondamos o número para não aparecerem números decimais na contagem
            // aí ao invés de incrementarmos o start++ incrementamos o start com start + o valor da constante incremento
            const incremento = Math.floor(total / 100);

            // valor em que os números vão iniciar a contagem 
            let start = 0;
            // agora podemos criar o intervalo, que vai servir para animar os números 
            const timer = setInterval(() => {
                // exibimos no elemento span o número 
                numero.innerText = start;

                // incrementamos o start a cada loop
                //start++;
                start += incremento;
                // verificamos se o start for maior que o número total, ou seja, o número que está lá no Span HTML, 
                // nós limpamos o intervalo, para que a contagem pare
                if (start > total) {
                    // abaixo dizemos que o valor de exibição do span vai ser igual ao total acima
                    numero.innerText = total;
                    clearInterval(timer);
                }
                // abaixo utilizamo o Math.rando() para que assim o tempo de contagem dos números sejam a cada vez que acontecerem 
                // com uma velocidade diferente 
            }, 45 * Math.random());
        });
    }

    // funçaõ que vai ativar quando uma mutação ocorrer 
    // passamos pra essa função como parâmetro uma mutação 
    // essa mutação que está sendo passada pra essa função é um array like com todos 
    // os tipos de mutação que a div está sofrendo, no nosso caso é apenas uma
    // e assim sendo, é o item zero do array 
    function handleMutation(mutation) {
        // nessa caso estamos procurando no class list do target se ele possui a classe ativo
        // se conter, podemos iniciar a função que anima os núemros, porque significa
        // que o usuário rolou até a section que tem os spans com os núemros que serão animados 
        if (mutation[0].target.classList.contains('ativo')) {
            // mandamos o observador parar de observar a div quando o usuário chegar nela 
            observer.disconnect();
            animaNumeros();
        }
    }

    const observeTarget = document.querySelector('#numerosTarget');

    // vamos utilizar uma MutationObserver - que é uma forma de saber se uma mudança ocorreu em algum atributo de um  
    // elemento HTML específico. Nesse caso, criamos uma constante com o valor de mutation para ficar observando a div 
    // que está com os spans com os números, para sabermos se alguma mudança ocorreu nela, ou seja, quando o usuário
    // rola a tela a div some, e aparece depois, e para que os números não fiquem rodando logo que a página carrega, e sim, quando
    // o usuário atingir essa div que está com os números e só então eles começarem a rotacionar usamos esse observador
    // o MutationObserver recebe alguns parâmetros, o primeiro é uma função de callback, e essa função de callback é justamente o 
    // que queremos que aconteça quando uma mutação, ou seja, uma mudança na nossa div acontecer
    const observer = new MutationObserver(handleMutation);
    // agora precisamos falar par o observador, o que necessariamente ele deve ficar observando através do método observe
    // devemos indicar qual é o item que ele deve observar, e fazemos isso através do target, o target é um elemento que 
    // será observado, no nosso caso é a section que possui o id #numerosTarget que armazenamos na constante observeTarget
    // o próximo parâmetro são as opções através de um objeto, ou seja, o que queremos que o observer fique 
    // observando no target que foi passado a ele, e nesse nosso caso, é a opção de atributos
    observer.observe(observeTarget, { attributes: true });
};