/*let persona1 = [nombre="Luis", peso=72, altura=1.72, imc=undefined]
let persona2 = [nombre="Carlos", peso=89, altura=1.75, imc=undefined]

function calcularImc (peso, altura) {
    return (peso/altura**2).toFixed(2)
}

persona1[3] = calcularImc(persona1[1], persona1[2])
persona2[3] = calcularImc(persona2[1], persona2[2])

function compararImc (nomb1, nomb2) {
    if (nomb1[3] < nomb2[3]) {
        return `${nomb1[0]} tiene un imc de ${nomb1[3]}, y ${nomb2[0]} tiene un imc de ${nomb2[3]} por lo tanto el imc de ${nomb1[0]} es menor que el de ${nomb2[0]}`
    }
    
    else {
        return `${nomb1[0]} tiene un imc de ${nomb1[3]}, y ${nomb2[0]} tiene un imc de ${nomb2[3]} por lo tanto el imc de ${nomb1[0]} es mayor que el de ${nomb2[0]}`
    }
}

console.log(compararImc(persona1, persona2))*/


let persona = [nombre=prompt("Cual es tu nombre?"), peso = prompt("Cuanto pesas?"), altura = prompt ("Cuanto mides? (en metros, ej: 1.76)", imc = undefined)]

function calcularImc (peso, altura) {
    return persona[3] = (peso/altura**2).toFixed(2)
}

alert(`El IMC de ${persona[0]} es de ${calcularImc(persona[1], persona[2])}`)

function categorizarImc() {
    if (persona[3] < 18.5 ) {
        alert("tu peso es inferior al normal")
    }

    else if (persona[3] >= 18.5 && persona[3] < 25 ) {
        alert("tu peso es normal")
    }

    else if (persona[3] >= 25 && persona[3] < 30 ) {
        alert("tenes sobrepeso")
    }

    else {
        alert("tenes obesidad")
    }
}

categorizarImc()