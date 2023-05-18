//1. Crea un objeto literal llamado "persona"
let persona = {
    nombre: "Matias Cervantes",
    edad: 12,
    ciudad: "Soledad",
    profesion: "Estudiante",
};

2; // Imprime en la consola el objeto "persona" completo.
console.log(persona);

//3. Crea una función llamada "presentacion"
function presentacion(miPersona) {
    let mensaje = "";
    let llaves = Object.keys(persona);

    for (let i = 0; i < llaves.length; i++) {
        let llave = llaves[i];
        mensaje += llave + ": " + persona[llave] + " ";
    }
    return mensaje;
}

//4. Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje"
mensaje = presentacion(persona);

//5. Imprime en la consola el valor de la variable "mensaje"
console.log(mensaje);

//6. Agrega una nueva propiedad al objeto "persona" llamada "hobbies"
persona.hobbies = ["Estudiar", "Jugar Sudoku", "Programar"];

//7. Imprime en la consola la propiedad "hobbies" del objeto "persona"
console.log(persona.hobbies);

//8. Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies
let claves = Object.keys(persona.hobbies);
for (let i = 0; i < claves.length; i++) {
    console.log(persona.hobbies[i]);
}
