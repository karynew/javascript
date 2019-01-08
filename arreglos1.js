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
meses.push('junio');
console.log(meses);