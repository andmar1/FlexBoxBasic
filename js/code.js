
function promedio(name)
{
    lista = [10,9,8,9,8,9,8,9,8,9,8,9,8,9];
    console.log(lista.length);
    let suma = 0 ; 
    lista.forEach(element => {
        suma += element;    
    });
    suma = suma / lista.length;
    console.log("El promedio de: "+name+" es de :"+ suma)
}
promedio("Luis")




