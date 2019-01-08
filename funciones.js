//function declarations
/*function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

function sumar(a,b){
    console.log(a + b);
}

function adicionar(c,d){
    return c + d;
}

let adicion;

adicion = adicionar(1,2);
adicion = adicionar(3,4);
adicion = adicionar(5,6);


//sumar(1,2);
//sumar(3,4);

//saludar('Alma');
//saludar('pablo');

*/
///////////////////////////mas funciones ///////////////////////////////////

function sayHello (name){
    /*if (typeof name === 'undefined'){
        name = 'visitante';
    }*/
    return `hola ${name}`;
}

let thing;
thing = sayHello('Pepe');

console.log(thing);

//////////////////////////function expression/////////////////////////////

const plus = function(a = 1, b = 4){
    return a + b;
}

console.log(plus(1,3));
console.log(plus(5));

const sayGoodMorning = function(nombre = 'visitante', edad = 20, ocupacion = 'trabajo como web-ui'){
    return `hola, tienes ${edad}, ${ocupacion} y te llamas ${nombre}`
}

console.log(sayGoodMorning('Pepito'));