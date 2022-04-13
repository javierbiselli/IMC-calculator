let persona = [nombre=prompt("Cual es tu nombre?"), peso = prompt("Cuanto pesas? (en kg, por ej: 70)"), altura = prompt ("Cuanto medis? (en metros, ej: 1.76)", imc = undefined)]

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

    else if (persona[3] >= 30) {
        alert("tenes obesidad")
    }

    else  {
        alert("error: no completaste los datos requeridos")
    }
}

categorizarImc()