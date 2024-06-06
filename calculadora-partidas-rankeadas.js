ranking(75, 7);
level();

function ranking(numVitorias, numDerrotas) {
    saldoVitorias = numVitorias - numDerrotas;
    return saldoVitorias;
}

function level () {
    if (saldoVitorias <= 10) 
        level = "Ferro"
    if (saldoVitorias >= 11 && saldoVitorias <= 20) 
        level = "Bronze"
    if (saldoVitorias >= 21 && saldoVitorias <= 50) 
        level = "Prata"
    if (saldoVitorias >= 51 && saldoVitorias <= 80) 
        level = "Ouro"
    if (saldoVitorias >= 81 && saldoVitorias <= 90) 
        level = "Diamante"
    if (saldoVitorias >= 91 && saldoVitorias <= 100) 
        level = "Lendário"
    if (saldoVitorias >= 101) 
        level = "Imortal"
    }

console.log ("O Herói tem saldo de " + saldoVitorias + " está no nível de " + level);