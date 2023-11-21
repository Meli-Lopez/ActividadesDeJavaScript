// Esta funcion permite al usuario realizar calculos de areas.
function mostrar() {
    // Se le pide al usuario que ingrese una opcion numerica.
    opc = parseInt(prompt("Digite 1 si quiere calcular el area del cuadrado, digite 2 si desea calcular el area del rectangulo, digite 3 si desea calcular el área del triangulo, digite 4 si desea salir"));

    // Se utiliza una estructura de control switch para manejar las diferentes opciones.
    switch (opc) {
        case 1:
        // Se pide al usuario que ingrese la medida de un lado del cuadrado.
        num1 = parseInt(prompt("Ingrese la medida de uno de los lados del cuadrado: "));
        // Se calcula el area del cuadrado como el cuadrado del lado ingresado.
        resultado = num1 ** 2;
        // Se muestra el resultado del area del cuadrado en la pagina.
        document.write(`El resultado del area del cuadrado es: ${resultado}`);
        break;
    case 2:
        // Se pide al usuario que ingrese la base y la altura del rectangulo.
        b = parseInt(prompt("Ingrese la base del rectangulo: "));
        a = parseInt(prompt("Ingrese la altura del rectangulo: "));
        // Se calcula el area del rectangulo como el producto de la base y la altura.
        resultado = b * a;
        // Se verifica que ni la base ni la altura sean iguales a cero antes de mostrar el resultado.
        if (b !== 0 && a !== 0) {
            document.write(`El area del rectangulo es: ${resultado}`);
        } else {
            // Si la base o la altura son cero, se muestra un mensaje de advertencia.
            document.write(`Verifique los datos de base y altura`);
        }
        break;
    case 3:
        // Se pide al usuario que ingrese la base y la altura del triangulo.
        ba = parseInt(prompt("Ingrese la base del triangulo: "));
        al = parseInt(prompt("Ingrese la altura del triangulo: "));
        // Se calcula el area del triangulo como la mitad del producto de la base y la altura.
        resultado = (ba * al) / 2;
        // Se muestra el resultado del area del triangulo en la pagina.
        document.write(`El area del triangulo es: ${resultado}`);
        break;
    case 4:
        // El usuario puede elegir la opcion de salir.
        break;
    }
}
