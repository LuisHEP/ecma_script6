// Rest

function somar() {
    let soma = 0;
    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma
}

console.log(somar(10, 20,30));

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numerAtual) => {
        total += numerAtual;
        return total
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30));

// Spread

const nums = [1, 2, 3, 4];
console.log(...nums)

const timesFutebolSp = ['Santos', 'Palmeiras', 'Bragantino', 'São Paulo'];
const timesFutebolRj = ['Vasco', 'Botafogo', 'Flamengo', 'Fluminense'];

const timesFutebol = timesFutebolSp.concat(timesFutebolRj);

console.log(timesFutebol);

const spreadTimesFutebol = [...timesFutebolSp, timesFutebolRj];

console.log(spreadTimesFutebol);

// Desestruturação Times de Futebol em Array
    const [item1, item2, item3, item4, ...outrosTimes] = timesFutebol

    console.log(item1)
    console.log(item2)
    console.log(item3)
    console.log(item4)
    console.log(outrosTimes)
//

const carroDaJulia = {
    modelo: 'Gol',
    marca: 'Wolskwagen',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

// Desestruturação

const {motor: motorCarroAna} = carroDaAna;
const {motor: motorCarroJulia} = carroDaJulia;

console.log(motorCarroAna);
console.log(motorCarroJulia);