function enviar() {
    var nombre = document.getElementById("nombrep").value;
    var linea = document.getElementById("lineap").value;
    var cantidad = document.getElementById("cantidadp").value;
    var valor = document.getElementById("valuep").value;

    cantidad = parseFloat(cantidad);
    valor = parseFloat(valor);

    var resultado = cantidad * valor;

    var datosDiv = document.getElementById("datos");
    datosDiv.innerHTML = "<p style='font-size: 1.2em; font-family: sans-serif; padding: 10px;'>Nombre: " + nombre + "</p><p style='font-size: 1.2em; font-family: sans-serif; padding: 10px;'>Linea: " + linea + "</p><p style='font-size: 1.2em; font-family: sans-serif; padding: 10px;'>Valor total: $" + resultado + "</p>"
}
function mostrarInventario() {
  // Obtener la referencia a la tabla
  var tabla = document.getElementById("tabla-productos");
  
  // Crear el encabezado de la tabla
  var encabezado = "<tr><th>Nombre</th><th>Cantidad</th><th>Precio</th></tr>";
  
  // Crear las filas de la tabla con los datos de los productos
  var fila1 = "<tr><td>Producto 1</td><td>10</td><td>$20.00</td></tr>";
  var fila2 = "<tr><td>Producto 2</td><td>5</td><td>$15.00</td></tr>";
  var fila3 = "<tr><td>Producto 3</td><td>20</td><td>$10.00</td></tr>";
  
  // Concatenar el encabezado y las filas y agregarlos a la tabla
  tabla.innerHTML = encabezado + fila1 + fila2 + fila3;
}
function mostrarCuentasCobro() {
  // Obtener la referencia a la lista
  var lista = document.getElementById("cuentas-cobro");
  
  // Crear los elementos de la lista con los datos de las cuentas de cobro
  var item1 = document.createElement("li");
  var item2 = document.createElement("li");
  var item3 = document.createElement("li");
  
  item1.innerHTML = "Cuenta de cobro 1";
  item2.innerHTML = "Cuenta de cobro 2";
  item3.innerHTML = "Cuenta de cobro 3";
  
  // Agregar los elementos de la lista a la lista HTML
  lista.appendChild(item1);
  lista.appendChild(item2);
  lista.appendChild(item3);
}
function mostrarClientesProveedores() {
  // Obtener la referencia a la lista
  var lista = document.getElementById("clientes-proveedores");
  
  // Crear los elementos de la lista con los datos de los clientes y proveedores
  var item1 = document.createElement("li");
  var item2 = document.createElement("li");
  var item3 = document.createElement("li");
  
  item1.innerHTML = "Cliente 1";
  item2.innerHTML = "Proveedor 1";
  item3.innerHTML = "Cliente 2";
  
  // Agregar los elementos de la lista a la lista HTML
  lista.appendChild(item1);
  lista.appendChild(item2);
  lista.appendChild(item3);
}
function cerrarCaja() {
  // Calcular el total de la caja
  var total = 1000;
  
  // Obtener la referencia al elemento span
  var span = document.getElementById("total-caja");
  
  // Asignar el total de la caja al contenido del elemento span
  span.innerHTML = total;
}
function generarFactura(event) {
  // Prevenir el comportamiento predeterminado del formulario
  event.preventDefault();
  
  // Obtener los valores del formulario
  var nombreCliente = document.getElementById("nombre-cliente").value;
  var producto = document.getElementById("producto").value;
  var cantidad = document.getElementById("cantidad").value;
  
  // Calcular el precio total
  var precioUnitario = 100; // Precio de venta del producto
  var precioTotal = precioUnitario * cantidad;
  
  // Crear la factura
  var factura = "Factura de venta\n\n" +
                "Cliente: " + nombreCliente + "\n" +
                "Producto: " + producto + "\n" +
                "Cantidad: " + cantidad + "\n" +
                "Precio unitario: $" + precioUnitario.toFixed(2) + "\n" +
                "Precio total: $" + precioTotal.toFixed(2);
  
  // Mostrar la factura en la consola
  console.log(factura);
}
  