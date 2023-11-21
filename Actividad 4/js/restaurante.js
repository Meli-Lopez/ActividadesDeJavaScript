// Esta funcion se llama cuando el usuario hace clic en el botón "Calcular Total".
function pedido() {
    // Obtener el tipo de plato seleccionado 
    var tipoPlato = document.getElementById("tipoPlato").value;
    // Obtener la cantidad de platos ingresada
    var cantidadPlatos = parseInt(document.getElementById("cantidadPlatos").value);

    // Obtener el tipo de bebida seleccionado 
    var tipoBebida = document.getElementById("bebida").value;
    // Obtener la cantidad de bebidas ingresada
    var cantidadBebidas = parseInt(document.getElementById("cantidadBebidas").value);

    // Definir los precios de los platos en un objeto
    var precioPlatos = {
        "Spaguetthis": 30000,
        "Arroz con pollo": 15000,
        "Sancocho de gallina": 25000
    };

    // Definir los precios de las bebidas en un objeto
    var precioBebida = {
        "Gaseosa": 3000,
        "Limonada": 2500,
        "jugo natural": 5000
    };

    // Calcular el costo total de los platos y las bebidas.
    var totalPlatos = precioPlatos[tipoPlato] * cantidadPlatos;
    var totalBebidas = precioBebida[tipoBebida] * cantidadBebidas;

    // Calcular el costo total general sumando el costo de los platos y las bebidas.
    var total = totalPlatos + totalBebidas;

    // Mostrar el resultado en el elemento con el id "resultado".
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Total a pagar: $" + total;
}

