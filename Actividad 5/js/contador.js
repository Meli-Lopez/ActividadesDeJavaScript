// Este bloque agrega un "escuchador de eventos" al objeto ventana para el evento "keydown".
// Cuando se presiona una tecla, se ejecuta la funcion de devolución de llamada proporcionada.
window.addEventListener("keydown", (e) => {
    // Esto verifica si la tecla presionada es la tecla "+".
    if (e.key == "+") {
        // Si es verdadero, llama a la funcion incrementar().
        incrementar();
    }
    // Esto verifica si la tecla presionada es la tecla "-".
    else if (e.key == "-") {
        // Si es verdadero, llama a la funcion decremento().
        decremento();
    }
    // Esto verifica si la tecla presionada es la tecla "r".
    else if (e.key == "r") {
        // Si es verdadero, llama a la función resetear().
        resetear();
    }
});

// Esto inicializa una variable llamada "contador" con el valor 0
let contador = 0;
// Esto obtiene una referencia a un elemento HTML con el ID "valor" y lo asigna a la variable "valor"
const valor = document.getElementById("valor");


function incrementar(){
//alert("Incremento")
//Incrementa la variable 'contador' en 1
contador += 1;
//localStorage.setItem("contador")
//Actualiza el contenido del elemento HTML con el id 'valor' con el valor actual de 'contador'
valor.innerHTML = contador;
}

//Esta funcion decrementa el contador
function decremento(){
    //alert("Decremento")
    //La condicion verifica si 'contador' es mayor que 0 antes de decrementar
    if(contador > 0){
        //Si 'contador' es mayor que 0, se decrementa en 1
        contador -= 1;
        //Se actualiza el contenido del elemento HTML con el id 'valor' con el nuevo valor de 'contador'.
        valor.innerHTML = contador;
    } else {
        // Si el 'contador' es igual o menor que 0, se establece en 0
        contador = 0;
        //Se actualiza el contenido del elemento HTML con el id 'valor' con el valor actualizado de 'contador'.
        valor.innerHTML = contador;
    }
}
// Esta funcion resetear el contador.
function resetear(){
    // Establece 'contador' en 0.
    contador = 0;
    //Se actualiza el contenido del elemento HTML con el id 'valor' con el valor actualizado de 'contador'
    valor.innerHTML = contador;
}