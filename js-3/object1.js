//1. Crea una variable llamada pedro de tipo objeto literal
let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    //6. Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ”
    saluda: function(){
        console.log("Hola, me llamo " + pedro.nombre);
    }
}

//2. Imprime en la consola el valor de la llave edad.
console.log(pedro.edad);

//3. Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;

//4. Elimina la propiedad con llave activo
delete pedro.activo;

//5. Recorre todas las propiedades e imprímelas en consola
let llaves = Object.keys(pedro);
for (let i = 0; i < llaves.length; i++){
    let llave = llaves[i];
    console.log(llave + ": " + pedro[llave]);
}

//7. Llama la función saluda y verifica el resultado.
pedro.saluda();