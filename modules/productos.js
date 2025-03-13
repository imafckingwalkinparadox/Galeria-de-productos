export function crearProducto(imgSrc, nombre, precio, descripcion) {
    // Crear el contenedor del producto
    const producto = document.createElement("div");
    producto.classList.add("producto");
    
    // Crear la imagen
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = nombre;
    producto.appendChild(img);
    
    // Crear el nombre del producto
    const titulo = document.createElement("h2");
    titulo.textContent = nombre;
    producto.appendChild(titulo);
    
    // Crear el precio
    const precioElemento = document.createElement("p");
    precioElemento.textContent = `$${precio}`;
    precioElemento.classList.add("precio");
    producto.appendChild(precioElemento);
    
    // Crear la descripción
    const descripcionElemento = document.createElement("p");
    descripcionElemento.textContent = descripcion;
    producto.appendChild(descripcionElemento);
    
    return producto;
}

// Ejemplo de uso
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("productos-container");
    const productoEjemplo = crearProducto("imagen.jpg", "Producto 1", 19.99, "Descripción del producto.");
    contenedor.appendChild(productoEjemplo);
});
