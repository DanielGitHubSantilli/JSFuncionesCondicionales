console.log("Bienvenido")

let x=1
let suma = 0
let n = 0

n = prompt("Ingrese la cantidad de notas que desea para calcular el promedio")
n=parseInt(n)

while(x<=n)
{
    valor=prompt("Ingrese nota"+x)
    valor=parseInt(valor)
    console.log("Nota Ingresada: " + valor)
    suma=suma+valor
    x=x+1
}

console.log("Total notas: " + n)
promedio = suma/(x-1)
console.log("El promedio de notas es: " + promedio)
if (promedio>=7 && promedio<10){
    console.log("Aprobaste con TEA. Felicitaciones")
}
else if (promedio>=4 && promedio<7){
     console.log("Tenés TEP... Seguí esforzandote")
}
else if (promedio>=1 && promedio<4){
    console.log("Tenés TED. Falta prestar más atención en clase y completar la carpeta.")
}else{
    console.log("No ingrese caracteres, sòlo números")
}



