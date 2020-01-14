const controles = document.querySelector('#controles'),
    cssModificado = document.querySelector('.css'),
    btn = document.querySelector('.btn');


controles.addEventListener('change', handleChange);

// função que vai ficar escutando as alterações de css no botão 
function handleChange(event) {
    // pegar o nome do evento que está sendo disparado quando algo é modificado no formulario
    const name = event.target.name;
    // pegamos também o valor que está sendo alterado 
    const value = event.target.value;

    // chamamos um método do objeto handleStyle para modificar o btn
    // chamamos o método como nomeObjeto[nomeMétodo](valor)
    // ou podemos chamar como nomeObjeto.nomeMetodo(valor)
    handleStyle[name](value);

    // exibimos os estilos css na tela para o usuário
    showCss();

    // salvando dados no localStorage
    saveValues(name, value);

    // console.log(value);
}


// construimos um objeto com todos os estilos para serem modificados 
// adicionando a ele métodos que irão alterar os estilos baseados no nome da função
// que é exatamente o mesmo nome do evento que está sendo disparado quando mudamos algum 
// input çá no formulário 
const handleStyle = {
    elemento: btn,
    backgroundColor(value) {
        this.elemento.style.backgroundColor = value;
    },
    height(value) {
        this.elemento.style.height = value + 'px';
    },
    width(value) {
        this.elemento.style.width = value + 'px';
    },
    texto(value) {
        this.elemento.innerText = value;
    },
    color(value) {
        this.elemento.style.color = value;
    },
    border(value) {
        this.elemento.style.border = value;
    },
    borderRadius(value) {
        this.elemento.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.elemento.style.fontFamily = value;
    },
    fontSize(value) {
        this.elemento.style.fontSize = value + 'rem';
    }
};


// mostrar css para o usuário copiar
function showCss() {
    // cssText é uma propriedade CSS que se encontra no DOM e que está em nosso btn que é 
    // um elemento button do HTML

    // no cssModificado.innerHTML estamos abrindo um span e quebrando o nosso texto do  cssText 
    // sempre que ele encontrar um ; e espaço '; '
    // depois estamos juntando novamente com o join() fechando com um ; e fechando o span que foi aberto, mas abrindo 
    // um novo span 
    cssModificado.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

// salvar valores que o usuário selecionou para a estilização do botão
function saveValues(saveName, saveValue) {
    // salvamos todos os valores que o usuário modificou no local storage 
    // geralmente se utiliza os colchetes [] para que o objeto tenha uma nova propriedade 
    // adicionada sempre que um nome novo for lançado dentro dos colchetes, pois se fosse com o ponto . 
    // seria apenas sobreescrito e permaneceria o último valor e nome, não teria mais de uma 
    // prorpiedade 
    localStorage[saveName] = saveValue;
}

setValues();

// verificar e peagr os valores que estão no local storage 
function setValues() {
    // pegamos todas as chaves do objeto local storage 
    const properties = Object.keys(localStorage);

    // feito isso faremos um loop nas propriedades e setar o valor salvo nos controles HTML
    properties.forEach((propertie) => {

        // atribuimos ao btn os estilos salvos no localStorage
        handleStyle[propertie](localStorage[propertie]);

        // ativamos também o show css para exibir o código CSS na tela 
        showCss();
        
        // primeiro acessamos os elementos HTML (inputs, etc)
        // e passamos dentro de elements[propertie] o nome da propriedade que queremos atribuir o value
        //  e atribumos a ele, o valor que está no localStorage, que é exatamente a propriedade 
        // que está sendo iterada 
        controles.elements[propertie].value = localStorage[propertie];
       console.log(controles.elements[propertie].value = localStorage[propertie]) ;
    });
}