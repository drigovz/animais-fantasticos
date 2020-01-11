export default function initData() {
    const diasFuncionamento = document.querySelector('[data-semana]');

    // dias da semana vai ser igual aos itens que estão no atributo data chamado semana 
    // como queremos esses dias separados, usamos o split() para quebrar onde se econtrarem vírgulas 
    // depois estamos usando o map para iterar cada item do array, que agora com o split quebramos a string onde 
    // se encontravam vírgulas e temos um novo array, agora com o MAP iteramos cada item desse array e convertemos ele para 
    // números com o construtor NUMBER dentro do map, o map nos devolve agora um novo array com todos os números 
    const diasSemana = diasFuncionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = diasFuncionamento.dataset.horario.split(',').map(Number);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();

    // verificamos se dentro dos dias da semana temos o index que foi passado no diaAgora
    // verificamos se é diferente de -1 pq se for -1, significa que não temos esse indice dentro do array diasSemana
    const estaAbertoDiaSemana = diasSemana.indexOf(diaAgora) !== -1;

    // verificamos se o horário de funcionamento está aberto ou fechado, essa expressão vai retornar um booleano
    const horarioAberto = (horarioAgora >= horarioSemana[0] || horarioAgora < horarioSemana[1]);

    if (estaAbertoDiaSemana === true && horarioAberto === true) {
        diasFuncionamento.classList.add('aberto');
    }
};