class heroi{
    constructor(tipo ,ataque, nome, idade){
        this.tipo = tipo
        this.ataque = ataque
        this.nome = nome
        this.idade = idade
        console.log(`O ${this.nome} que tem ${this.idade} anos e é do tipo ${this.tipo} atacou usando ${this.ataque}!`)
    }
 }

let op = 4

if (op == 1){
	let acao = new heroi ("Mago", "magia", "Gargamel", 110)
} else if (op == 2){
	let acao = new heroi ("Guerreiro", "usou espada", "Gargamel", 110)
} else if (op == 3){
	let acao = new heroi ("Monje", "usou artes marciais", "Gargamel", 110)
} else if (op == 4){
	let acao = new heroi ("Ninja", "usou shuriken", "Gargamel", 110)
} else {
	console.log("Você não sabe brincar")
}
