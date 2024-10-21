let saldo = saldoJogador(10, 1)

if (saldo <= 10) {
    console.log("O Herói tem um saldo de " + saldo + " vitórias e está no nível Ferro")
} else if (saldo > 10 && saldo < 21) {
    console.log("O Herói tem um saldo de " + saldo + " vitórias e está no nível Bronze")
} else if (saldo > 20 && saldo < 51) {
    console.log("O Herói tem um saldo de " + saldo + " vitórias e está no nível Prata")
} else if (saldo > 50 && saldo < 81) {
    console.log("O Herói tem um saldo de " + saldo + " vitórias e está no nível Ouro")
} else if (saldo > 80 && saldo < 91) {
    console.log("O Herói tem um saldo de " + saldo + " vitórias e está no nível Diamante")
} else if (saldo > 90 && saldo < 101) {
    console.log("O Herói tem um saldo de " + saldo + " vitórias e está no nível Lendário")
} else if (saldo >= 101) {
    console.log("O Herói tem um saldo de " + saldo + " vitórias e está no nível Imortal")
}
    


function saldoJogador(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}






/*Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal*/