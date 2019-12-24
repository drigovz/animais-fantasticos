/* const menu = document.querySelector('.menu');
//const propriedadesMenu = menu.getBoundingClientRect();

// se o menu sair da tela de vizualização do usuário ele fica fixo no topo  
window.addEventListener('scroll', () => {
    const propriedadesMenu = menu.getBoundingClientRect();

    if (propriedadesMenu.top < 0) {
        menu.classList.add('menu-fixo');
    } 
}); */

// somar a largura de todas as imagens da página 
/* function somaImagens() {
    const imgs = document.querySelectorAll('img');
    let soma = 0;
    imgs.forEach((item) => {
        soma += item.offsetWidth;
    });
    console.log(soma);
}

window.onload = function () {
    somaImagens();
} */

// trabalhando com eventos de clipboard
/*const h2 = document.querySelector('h2');

h2.addEventListener('copy', () => {
	console.log(h2.innerText);
});*/


// pegando a tecla que o usuário digitou

/* window.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        console.log('você teclou em A');
    } else if (event.key === 'b') {
        console.log('você teclou em B');
    }
}); */


// adiciona a class ativo a um dos links e remove dos outros 
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        linksInternos.forEach((links) => {
            links.classList.remove('ativo');
        });

        link.classList.toggle('ativo');
    });
});

// aumentar todo os textos das tags p quando usuário digitar a tecla t 
const paragrafos = document.querySelectorAll('p');

window.addEventListener('keydown', (event) => {
    if (event.key === 't') {
        paragrafos.forEach((item) => {
            item.classList.toggle('font-maior');
        });
    }
});

























