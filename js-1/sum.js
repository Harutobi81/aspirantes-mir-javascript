function suma(numero){
    if (numero > 0){ //valida que el numero sea mayor que cero
        var sum = 0;
        mensaje = "";
        for (i = 1; i <= numero; i++){ //ciclo para sumar todos los numeros hasta el numero dado
            sum += i;
            
            if (i === numero) // comparo si es el ultimo ciclo para que el simbolo final sea un = y ni un +
                mensaje += i + " = "
            else
                mensaje += i + " + ";
        }
        return mensaje + sum;
    }else{
        return "El número debe ser mayor que cero.";
    }
    
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));