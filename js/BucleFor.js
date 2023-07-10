alert("Práctica for-números primos")

//Uso bucle for

let n = prompt("Ingrese número máximo para calcular los número primos.");

let contador = 0
 

proximoPrimo:

for(let i=2; i<=n; i++){//por cada i buscar un divisor

    for(let j = 2; j<i; j++) {//buscar un divisor
        if (i % j == 0) continue proximoPrimo; //No es primo, ir al próximo i
    }
    alert(i); //primo
    console.log("Los números primos de la secuencia: " + i);
    
    contador=contador+1
    
}
//Para saber cuantos números primos se encontraron:
console.log("Cantidad de números primos: " + contador)


