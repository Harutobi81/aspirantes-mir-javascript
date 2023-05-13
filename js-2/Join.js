function join(arreglo) {
    if (arreglo.length == 0) {
        return "undefined";
    } else {
    var cadena = "";
    for (let item in arreglo) {
        cadena += arreglo[item] + " ";
    }
    return cadena;

    }
}

console.log(join([1, 3, 2])); // 1
console.log(join([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(join([])); // -1
