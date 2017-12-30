/*Problema 4:
Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar índice.*/

//Array con números positivos
var array = [81, 92, 3, 24, 100, 1];
//variable con el metodo Math.min que encuentra el número más pequeño dado en el array
var numMenor = Math.min(...array);
//funcion que muestra el número mas pequeño
function resultado(number) {
  return number === numMenor;
}
//findIndex devuelve el indice del número más pequeño
console.log('Este es el índice del número más pequeño: '+ array.findIndex(resultado));

/*Problema 5:
Dado un arreglo de números positivos, encontrar el elemento más pequeño e intercambiarlo por el primer elemento del arreglo.*/

//array con números positivos
var array = [45, 23, 78, 9];
//variable que encuentra el elemento más pequeño
var numMenor = Math.min(...array);
//función que muestra el elemento más pequeño encontrado por la variable anterior
function resultado(number) {
  return number === numMenor;
}
//obtengo el indice del elemento más pequeño
var indice = array.findIndex(resultado);
//función que intercambia el primer elemento por el más pequeño
function intercambio(array) {
//copio el array con slice()
  var copia = array.slice();
//uso splice para cambiar el número menor por el primer elemento del array
  var num = copia.splice(indice,1,copia[0]);
  copia.splice(0,1,num[0]);
  return copia;
}
//ejecuto la función
console.log(intercambio(array));

/*Problema 14
Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.*/

//función que determina si un número es par
function numPares(num) {
  return num % 2 === 0;
}
//uso filter() para crear un nuevo arreglo con los elementos que cumplen con la función
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(numPares);
//ejecuto la función
console.log(num);

/*Problema 15 resuelto
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada elemento multiplicado por 12.*/

//variable con números
var array = [8, 4, 9, 6];
//uso map para que aplique la función en cada elemento del array
var multiplicar = array.map(function(num) {
  return num * 12;
});
//ejecuto la función
console.log(multiplicar);
