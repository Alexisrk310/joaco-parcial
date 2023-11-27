document.getElementById('calcularBtn').addEventListener('click', function () {
    validarYCalcular();
    // abrirCalculadora();
});

function validarYCalcular() {
    const input = document.getElementById('input').value;
    const resultadoElemento = document.getElementById('resultado');
    const procesoElemento = document.getElementById('proceso');

    if (!esEntradaValida(input)) {
        resultadoElemento.innerHTML = `<span style="color: red;">Coloque una operación válida</span>`;
        procesoElemento.innerHTML = '';  // Limpiar el elemento de proceso
        return;
    }

    try {
        const resultados = obtenerResultados(input);

        // Mostrar resultados con animaciones
        
        mostrarPasosEnPantalla(input);
    } catch (error) {
        resultadoElemento.innerHTML = `<span class="animate-exit" style="color: red;">Error en la operación</span>`;
        procesoElemento.innerHTML = '';  // Limpiar el elemento de proceso
    }
}

function esEntradaValida(entrada) {
    // Verificar que haya solo una operación en la entrada y que sea una suma
    const sumaRegex = /^[0-9]{1,2}\s*\+\s*[0-9]{1,2}$/;
    return sumaRegex.test(entrada);
}

function mostrarPasosEnPantalla(input) {
    const procesoElemento = document.getElementById('proceso');
    const pasos = obtenerPasosDetallados(input);

    // Mostrar pasos con animación
    procesoElemento.innerHTML = `<strong>Proceso:</strong>\n<strong>${pasos}</strong>`;
}

function obtenerPasosDetallados(entrada) {
    const numeros = entrada.match(/\d+/g) || [];
    let proceso = [];
    let resultadoParcial = 0;

    for (let i = 0; i < numeros.length; i++) {
        const digitos = [...numeros[i].toString()].map((d, index) => {
            const duration = index % 2 === 0 ? '12s' : '24s'; // Duración diferente para índices pares e impares
            return `<span class="animate-enter" style="animation-duration: ${duration}">${d}</span>`;
        });
        console.log(digitos);
        resultadoParcial += parseInt(numeros[i]);
        console.log(resultadoParcial);

        // Agregar cada dígito del número al proceso con animación
        proceso.push(`${digitos.join(', ')}\n`);
    }

    proceso.push(`<hr class=""/> \n <strong class="animate-enter" style="animation-duration: 30s">${resultadoParcial}</strong>`); //aqui
    return proceso.join('');
}

function obtenerResultados(entrada) {
    const numeros = entrada.match(/\d+/g) || [];
    let resultados = [];

    for (let i = 0; i < numeros.length; i++) {
        const digitos = [...numeros[i].toString()].map(d => parseInt(d));
        resultados.push(digitos[0]); // Cambio aquí para obtener solo el primer dígito
    }

    return resultados;
}
