const numeros = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição é executada
// Terceira expressão: é executada sempre ao final do bloco

// condição se o numero for menor que 6 executo novamente
for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}