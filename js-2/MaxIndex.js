function maxIndex(arreglo){
    if (arreglo.length == 0){
        return -1;
    }else{
        var mayor = arreglo[0];
        var indice = 0;
        for (let item in arreglo){
            if (arreglo[item] > mayor){
                mayor = arreglo[item];
                indice = item;
            }
        }
        return indice;
    }
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1