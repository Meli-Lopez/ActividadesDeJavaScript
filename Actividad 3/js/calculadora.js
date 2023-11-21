// Funcion para realizar una suma
function sumar(n1, n2) {
    // Calcular la suma de dos numeros
    var resultado = n1 + n2;
    var res = document.getElementById("resultado");
    // Verificar que los numeros no son cero antes de mostrar el resultado
    if (n1 != 0 && n2 != 0) {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Actualizar el contenido del elemento con el resultado
        res.innerHTML = `Total: ${resultado}`;
        // Establecer el color del texto en negro
        res.style.color = "black";
    } else {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Mostrar un mensaje de verificacion si uno de los numeros es cero
        res.innerHTML = `Verifique sus datos`;
        // Establecer el color del texto en rojo
        res.style.color = "red";
    }
}

// Funcion para realizar una resta
function restar(n1, n2) {
    // Calcular la resta de dos numeros
    var resultado = n1 - n2;
    var res = document.getElementById("resultado");
    // Verificar que los numeros no son cero antes de mostrar el resultado
    if (n1 != 0 && n2 != 0) {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Actualizar el contenido del elemento con el resultado
        res.innerHTML = `Total: ${resultado}`;
        // Establecer el color del texto en negro
        res.style.color = "black";
    } else {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Mostrar un mensaje de verificacion si uno de los numeros es cero
        res.innerHTML = `Verifique sus datos`;
        // Establecer el color del texto en rojo
        res.style.color = "red";
    }
}

// Funcion para realizar una multiplicacion
function multiplicar(n1, n2) {
    // Calcular el producto de dos numeros
    var resultado = n1 * n2;
    // Obtener el elemento HTML con el id "resultado"
    var res = document.getElementById("resultado");
    // Verificar que los numeros no son cero antes de mostrar el resultado
    if (n1 != 0 && n2 != 0) {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Actualizar el contenido del elemento con el resultado
        res.innerHTML = `Total: ${resultado}`;
        // Establecer el color del texto en negro
        res.style.color = "black";
    } else {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Mostrar un mensaje de verificacion si uno de los numeros es cero
        res.innerHTML = `Verifique sus datos`;
        // Establecer el color del texto en rojo
        res.style.color = "red";
    }
}

// Funcion para realizar una division
function dividir(n1, n2) {
    // Calcular el cociente de dos numeros
    var resultado = n1 / n2;
    // Obtener el elemento HTML con el id "resultado"
    var res = document.getElementById("resultado");
    // Verificar que los numeros no son cero antes de mostrar el resultado
    if (n1 != 0 && n2 != 0) {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Actualizar el contenido del elemento con el resultado
        res.innerHTML = `Total: ${resultado}`;
        // Establecer el color del texto en negro
        res.style.color = "black";
    } else {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Mostrar un mensaje de verificacion si uno de los numeros es cero
        res.innerHTML = `Verifique sus datos`;
        // Establecer el color del texto en rojo
        res.style.color = "red";
    }
}

// Funcion para calcular la potencia de un numero
function potencia(n1) {
    // Calcular el cuadrado de un numero
    var resultado = n1 * n1;
    // Obtener el elemento HTML con el id "resultado"
    var res = document.getElementById("resultado");
    // Verificar que el numero no es cero antes de mostrar el resultado
    if (n1 != 0) {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Actualizar el contenido del elemento con el resultado
        res.innerHTML = `Total: ${resultado}`;
        // Establecer el color del texto en negro
        res.style.color = "black";
    } else {
        // Mostrar el bloque de respuesta
        respuesta.style.display = "block";
        // Mostrar un mensaje de verificacion si el numero es cero
        res.innerHTML = `Verifique sus datos`;
        // Establecer el color del texto en rojo
        res.style.color = "red";
    }
}

// Funcion principal que se llama cuando se hace clic en un boton
function mostrar() {
    // Obtener los valores ingresados por el usuario
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opc = parseInt(document.getElementById("opc").value);

    // Utilizar un switch para determinar que operacion realizar
    switch (opc) {
        case 1:
            // Llamar a la funcion de suma
            sumar(n1, n2);
            break;
        case 2:
            // Llamar a la funcion de resta
            restar(n1, n2);
            break;
        case 3:
            // Llamar a la funcion de multiplicacion
            multiplicar(n1, n2);
            break;
        case 4:
            // Llamar a la funcion de division
            dividir(n1, n2);
            break;
        case 5:
            // Llamar a la funcion de potencia
            potencia(n1);
            break;
        default:
            // Mostrar una alerta si la opcion no es valida
            alert("La opcion no es valida");
    }
}
