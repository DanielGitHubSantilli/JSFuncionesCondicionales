function Promedio(){
    console.log("Bienvenido")
    // (nota1+nota2+nota3)/3
    let x=1
    let suma = 0
    let n = 0

    n = prompt("Ingrese la cantidad de notas que desea para calcular el promedio")
    n=parseInt(n)

    while(x<=n)
    {
    valor=prompt("Ingrese nota"+x)
    if (valor < 1 || valor > 10)
    prompt("Las notas deben ser mayores a 1 y menores o iguales a 10")
    else if
    (valor=parseInt(valor)) 
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
}
Promedio()