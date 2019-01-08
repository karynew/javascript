//crear un arreglo

//const numeros = [10, 20, 30, 40, 50];
//console.log(numeros);

//arreglo de strings(método alternativo)

const meses  = new Array('enero','febrero','marzo','abril');
console.log(meses.length);

//arreglo mezcaldo
//const mezcaldo = ['hola',20, true, null, false, undefined];
//console.log(mezcaldo);

let nombre = 'juan';
console.log(Array.isArray(nombre));

console.log(meses[1]);

meses[4] = 'Mayo';

//añadir al final del arreglo
meses.push('junio');

//añadir al inicio del arreglo

meses.unshift('Mes 0');

//como eliminar el ultimo elemento de un arreglo
meses.pop();
//como eliminar un elemento del inicio del arreglo

meses.shift();

//quitar un rango
meses.splice(2,1);

//revertir

meses.reverse();

//unir un arrgloe con otro

let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];
console.log(arreglo1.concat(arreglo2));

//enocntrar un elemento en el arreglo
//console.log(meses.indexOf('abril'));

console.log(meses);