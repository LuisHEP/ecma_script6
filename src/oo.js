// function Pokemon(nomePokemon, tipoPokemon) {
//     this.nome = nomePokemon;
//     this.tipo = tipoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "Elétrico")

class Pokemon {
    #hp = 100

    constructor(nomePokemon, tipoPokemon) {
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }
    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com ${nomeAtaque}`)
    }
    recebeuAtaque() {
        this.#hp -= 10;
    }
    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu Red', 'Elétrico')
    }
    atacar(nomeAtaque) {
        console.log(`${this.nome} atacou com Thunder`)
    }
}

const pikachuDoAsh = new Pikachu();

pikachuDoAsh.recebeuAtaque();
console.log(pikachuDoAsh.hp);
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();

const pikachu = new Pokemon('Pikachu', 'Elétrico');
pikachu.atacar('Thunder')

console.log(pikachuDoAsh);
console.log(pikachu);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);