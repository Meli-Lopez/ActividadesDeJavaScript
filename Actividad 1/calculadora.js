// Esta función permite al usuario elegir una operacion matematica
function mostrar() {
    // Se le pide al usuario que ingrese una opcion numerica dependiendo de la operacion que quiera realizar.
    opc = parseInt(prompt("Digite 1 si quiere realizar una suma, digita 2 si quiere realizar una resta, digite 3 si quiere realizar una multiplicacion, digite 4 si quiere realizar una division o digite 5 si quiere saber cuál número es mayor"));

    // Se utiliza una estructura de control switch para manejar las diferentes opciones.
    switch (opc) {
        case 1:
            num1 = parseFloat(prompt("Ingrese el primer número: "));
            num2 = parseFloat(prompt("Ingrese el segundo número: "));
            resultado = num1 + num2;
            document.write(`El resultado de la suma de los dos números es: ${resultado}`);
            break;
        case 2:
            num1 = parseFloat(prompt("Ingrese el primer número: "));
            num2 = parseFloat(prompt("Ingrese el segundo número: "));
            resultado = num1 - num2;
            document.write(`El resultado de la resta de los dos números es: ${resultado}`);
            break;
        case 3:
            num1 = parseFloat(prompt("Ingrese el primer número: "));
            num2 = parseFloat(prompt("Ingrese el segundo número: "));
            resultado = num1 * num2;
            document.write(`El resultado de la multiplicación es: ${resultado}`);
            break;
        case 4:
            num1 = parseFloat(prompt("Ingrese el primer número: "));
            num2 = parseFloat(prompt("Ingrese el segundo número: "));
            resultado = num1 / num2;
            document.write(`El resultado de la división es: ${resultado}`);
            break;
        case 5:
            num1 = parseFloat(prompt("Ingrese el primer número: "));
            num2 = parseFloat(prompt("Ingrese el segundo número: "));
            if (num1 > num2)
                document.write(`El número 1 ` + num1 + " es mayor que el número 2");
            else {
                document.write("El segundo número es mayor que el primero");
            }
            break;
    }
}

