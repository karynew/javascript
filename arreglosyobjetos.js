//arreglo de objetos


const autos = [
{
    modelo:'Mustang', 
    motor:6.0
},
{
    modelo:'Camaro', 
    motor:6.1
},
{
    modelo:'Challenge', 
    motor:6.3
}

];

autos[0].modelo = 'Ferrari';

for (let i = 0; i < autos.length; i++){
    console.log(`${autos[i].modelo} ${autos[i].motor}`);
}


//console.log(autos[0].modelo);
//console.log(autos.length);