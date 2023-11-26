document.getElementById('calcularBtn').addEventListener('click', validarYCalcular);

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
        const resultado = eval(input);

        if (isNaN(resultado) || !isFinite(resultado)) {
            resultadoElemento.innerHTML = `<span style="color: red;">Error en la operación</span>`;
            procesoElemento.innerHTML = '';  // Limpiar el elemento de proceso
        } else {
            resultadoElemento.innerHTML = `<strong>Resultado:</strong> ${resultado}`;
            mostrarPasosEnPantalla(input);
        }
    } catch (error) {
        resultadoElemento.innerHTML = `<span style="color: red;">Error en la operación</span>`;
        procesoElemento.innerHTML = '';  // Limpiar el elemento de proceso
    }
}

function esEntradaValida(entrada) {
    // Verificar que haya solo una operación en la entrada y que sea una suma
    return /^[0-9]+\s*\+\s*[0-9]+$/.test(entrada);
}

function mostrarPasosEnPantalla(input) {
    const procesoElemento = document.getElementById('proceso');
    const pasos = obtenerPasosDetallados(input);

    procesoElemento.innerHTML = `<strong>Proceso:</strong>\n${pasos}`;
}

function obtenerPasosDetallados(entrada) {
    const numeros = entrada.match(/\d+/g) || [];
    let proceso = [];

    let resultadoParcial = 0;

    for (let i = 0; i < numeros.length; i++) {
        const numero = +numeros[i];
        resultadoParcial += numero;

        proceso.push(`${numero}\n`);
    }

    proceso.push(`<hr/> \n ${resultadoParcial}`);
    return proceso.join('');
}
