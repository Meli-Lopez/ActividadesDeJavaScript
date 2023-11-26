// Declaracion de un array vacio que representara el carrito de compras
let carrito = [];
// Variable para almacenar el total de la compra
let totalCompra = 0;

// Funcion para agregar un producto al carrito
function agregarAlCarrito(producto, precio){
    // Agrega un objeto con el nombre del producto y su precio al array 'carrito'
    carrito.push({ producto, precio });
    // Llama la funcion para actualizar la visualizacion del carrito
    actualizarCarrito();
}

// Funcion para actualizar la visualizacion del carrito en la interfaz
function actualizarCarrito() {
    // Obtiene una referencia al elemento con el id "carritoLista"
    const carritoLista = document.getElementById("carritoLista");
    // Limpia el contenido actual del elemento
    carritoLista.innerHTML = "";

    // Itera sobre cada elemento en el array 'carrito'
    carrito.forEach(item => {
        // Crea un nuevo elemento de lista (li) con el nombre del producto y su precio
        const listItem = document.createElement("li");
        listItem.textContent = `${item.producto} - $${item.precio}`;
        // Agrega el elemento de lista al elemento con id "carritoLista"
        carritoLista.appendChild(listItem);
    });
}

// Funcion para calcular el total de la compra
function calcularTotal() {
    // Inicializa la variable 'totalCompra' en 0
    totalCompra = 0;

    // Itera sobre cada elemento en el array 'carrito'
    carrito.forEach(item => {
        // Suma los precios de cada producto al total
        totalCompra += item.precio;
    });

    // Obtiene una referencia al elemento con el id "totalCompra"
    const totalCompraElement = document.getElementById("totalCompra");
    // Actualiza el contenido del elemento con el total de la compra formateado como moneda
    totalCompraElement.textContent = totalCompra.toLocaleString('en-US', {
        style: 'currency', // Establece el estilo de formato como moneda.
        currency: 'USD'  // Establece la moneda como dolares estadounidenses.
    });
}

// Funcion para resetear el carrito
function resetearCarrito() {
    // Obtiene una referencia al elemento con el id "carritoLista"
    document.getElementById("carritoLista").innerHTML = "";
    // Limpia el array 'carrito'
    carrito = [];

    // Obtiene una referencia al elemento con el id "totalCompra"
    const totalCompraElement = document.getElementById("totalCompra");
    // Restablece el contenido del elemento a "0"
    totalCompraElement.innerText = "0";
}
