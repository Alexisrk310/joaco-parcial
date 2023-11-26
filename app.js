document.getElementById('calcularBtn').addEventListener('click', validarYCalcular);

function validarYCalcular() {
    const input = document.getElementById('input').value;
    const resultadoElemento = document.getElementById('resultado');

    if (!input.includes('+') && !input.includes('-') && !input.includes('*') && !input.includes('/')) {
        resultadoElemento.innerHTML = `<span style="color: red;">Coloque un signo para realizar una operación</span>`;
        return;
    }

    if (esEntradaValida(input)) {
        // Si la entrada es válida, realizar la operación
        try {
            const resultado = eval(input);
            resultadoElemento.innerHTML = `<strong>Resultado:</strong> ${resultado}`;
        } catch (error) {
            resultadoElemento.innerHTML = `<span style="color: red;">Error en la operación</span>`;
        }
    } else {
        resultadoElemento.innerHTML = `<span style="color: red;">Entrada no válida</span>`;
    }
}

function esEntradaValida(entrada) {
    // Verificar que la entrada contenga solo dígitos y operadores permitidos
    const caracteresPermitidos = /^[0-9+\-*\/\s]+$/;
    if (!caracteresPermitidos.test(entrada)) {
        return false;
    }

    // Verificar que la entrada no comience ni termine con un operador
    const primerCaracter = entrada.charAt(0);
    const ultimoCaracter = entrada.charAt(entrada.length - 1);
    if ('+-*/'.includes(primerCaracter) || '+-*/'.includes(ultimoCaracter)) {
        return false;
    }

    return true;
}
