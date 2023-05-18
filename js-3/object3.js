//1. Crear una variable llamada receta e inicialízalo con un objeto literal vacío.
let receta = {

}

//2. Agrégale una propiedad nombre con valor “Sandwich”.
receta.nombre = "Sandwich"

//3. Agrégale una propiedad ingredientes con un arreglo vacío.
receta.ingredientes = []

//4. Agrega un objeto al arreglo ingredientes con las siguientes propiedades.
receta.ingredientes.push({
    nombre: "Pan",
    cantidad: 2
})

//5. Agrega otro ingrediente al arreglo con las siguientes propiedades:
receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1
})

//6. Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer “Pan”.
console.log(receta.ingredientes[0])

//7. Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
function sumaCantidad(){
    let claves = Object.keys(receta.ingredientes)
    let cantidadTotal = 0
    for (let i = 0; i < claves.length; i++) {
        cantidadTotal += receta.ingredientes[i].cantidad
    }
    return cantidadTotal

}

console.log("El total de los ingresientes es: " + sumaCantidad())
