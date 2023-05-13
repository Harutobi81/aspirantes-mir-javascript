function sum(arreglo){
    var suma = 0;
    for (let item of arreglo){
        suma += item;
    }
    
    return suma;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0