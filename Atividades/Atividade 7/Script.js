function GerarNumeros () {
   var resultado = [];
   var resultadovetor = [];
   for (let i = 0; i < 100; i++) {
   aleatorio = (numero) => Math.floor(Math.random() * numero);
   let aleatorioPrimo = aleatorio(10)
   
    if ((aleatorioPrimo != 4) && (aleatorioPrimo != 6) && (aleatorioPrimo != 8) && (aleatorioPrimo != 9) && (aleatorioPrimo != 0) && (aleatorioPrimo != 1)) {
        console.log(aleatorioPrimo)
        resultado[i] = aleatorioPrimo
       
        for (let i = 0; i < aleatorioPrimo; i++) {
        resultadovetor[i] = resultado;
        document.getElementById("paragrafo").innerHTML = resultadovetor[i]
        }
    }
    
   }
}



