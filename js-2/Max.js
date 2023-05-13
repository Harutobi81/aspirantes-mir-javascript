function max(arreglo){
    if (arreglo.length == 0){
        return "undefined";
    }else{
        var mayor = arreglo[0];
        for (let item in arreglo){
            if (arreglo[item] > mayor){
                mayor = arreglo[item];
            }
        }
        return mayor;
    }
    
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined