

export default function initAccordion() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt'),

        classeAtivo = 'ativo';

    if (accordionList.length > 0) {
        accordionList[0].classList.toggle(classeAtivo.trim());
        accordionList[0].nextElementSibling.classList.toggle(classeAtivo.trim());

        accordionList.forEach((lista, index) => {
            lista.addEventListener('click', () => {
                lista.classList.toggle(classeAtivo.trim());
                lista.nextElementSibling.classList.toggle(classeAtivo.trim());
            });
        });
    }
};