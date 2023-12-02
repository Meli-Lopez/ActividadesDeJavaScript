// Declaración de un array vacío que representará el carrito de compras
let carrito = [];
// Variable para almacenar el total de la compra
let totalCompra = 0;
// Variable para habilitar/deshabilitar el cálculo total
let calcularTotalHabilitado = false;

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    // Agrega un objeto con el nombre del producto y su precio al array 'carrito'
    carrito.push({ producto, precio, cantidad: 1 });
    // Llama la función para actualizar la visualización del carrito
    actualizarCarrito();
}

// Función para disminuir la cantidad del producto en el carrito
function quitarAlCarrito(libro) {
    const productoEnCarritoIndex = carrito.findIndex(item => item.producto === libro);

    if (productoEnCarritoIndex !== -1) {
        carrito[productoEnCarritoIndex].cantidad--; // Reduce la cantidad del producto

        if (carrito[productoEnCarritoIndex].cantidad === 0) {
            // Si la cantidad llega a cero, elimina el producto del carrito
            carrito.splice(productoEnCarritoIndex, 1);
        }
    }

    // Llama la función para actualizar la visualización del carrito
    actualizarCarrito();
}



// Función para actualizar la visualización del carrito en la interfaz
function actualizarCarrito() {
    // Obtiene una referencia al elemento con el id "carritoLista"
    const carritoLista = document.getElementById("carritoLista");
    // Limpia el contenido actual del elemento
    carritoLista.innerHTML = "";

    // Itera sobre cada elemento en el array 'carrito'
    carrito.forEach(item => {
        // Crea un nuevo elemento de lista (li) con el nombre del producto, su precio y cantidad
        const listItem = document.createElement("li");
        listItem.textContent = `${item.producto} - $${item.precio} - Cantidad: ${item.cantidad}`;
        // Agrega el elemento de lista al elemento con id "carritoLista"
        carritoLista.appendChild(listItem);
    });

    calcularTotal();
}

// Función para resetear el carrito
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

// Funcion para calcular el total de la compra
function calcularTotal() {
    if (calcularTotalHabilitado) {
        // Inicializa la variable 'totalCompra' en 0
        totalCompra = 0;

        // Itera sobre cada elemento en el array 'carrito'
        carrito.forEach(item => {
            // Suma los precios de cada producto multiplicado por la cantidad al total
            totalCompra += item.precio * item.cantidad;
        });

        // Obtiene una referencia al elemento con el id "totalCompra"
        const totalCompraElement = document.getElementById("totalCompra");
        // Actualiza el contenido del elemento con el total de la compra formateado como moneda
        totalCompraElement.textContent = totalCompra.toLocaleString('en-US', {
            style: 'currency', // Establece el estilo de formato como moneda.
            currency: 'USD'  // Establece la moneda como dólares estadounidenses.
        });
    }
}

// Funcion para habilitar el calculo total
function habilitarCalcularTotal() {
    calcularTotalHabilitado = true;
    // Llama la función para calcular el total solo cuando se hace clic en el boton
    calcularTotal();
}
