import { ProductosAPI } from "../services/api.js";
import { crearProducto } from "../modules/productos.js";

export async function mostrarProductos() {
    try{
        let datos = await ProductosAPI();
        console.log(datos);;
        todosLosProductos(datos);
    }catch(error){console.error("Error:", error)}
}

function todosLosProductos(datos){
    let DOM = document.querySelector("#root");

    datos.forEach(element => {
        console.log(element);
        DOM.appendChild(crearProducto(element.image, element.title, element.price, element.description));
    });
}