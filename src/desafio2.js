let vit = 40
let derrotas = 20
let result = vit - derrotas

if (result >= 0 & result <= 10){
    console.log("O herói tem um saldo de "+ result + " vitórias e está no nível Ferro.")
} else if (result > 11 & result <= 20){
    console.log("O herói tem um saldo de "+ result + " vitórias e está no nível Bronze.")
} else if (result > 21 & result <= 50){
    console.log("O herói tem um saldo de "+ result + " vitórias e está no nível Prata.")
} else if (result > 51 & result <= 80){
    console.log("O herói tem um saldo de "+ result + " vitórias e está no nível Ouro.")
} else if (result > 81 & result <= 90){
    console.log("O herói tem um saldo de "+ result + " vitórias e está no nível Diamante.")
} else if (result > 91 & result <= 100){
    console.log("O herói tem um saldo de "+ result + " vitórias e está no nível Lendário.")
} else if (result > 101){
    console.log("O herói tem um saldo de "+ result + " vitórias e está no nível Imortal.")
}else {
    console.log("O herói tem um deficit de "+ result + " e precisa começar de novo!")
}