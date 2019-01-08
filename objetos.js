const persona = {
    nombre: 'miguel',
    apellido: 'jimenez',
    profesion:'escultor',
    email: 'correo@correo.com',
    edad:40,
    musica: ['trance', 'Rock', 'grunge'],
    hogar:{
        ciudad:'Guadalajara',
        pais:'mexico'
    },
    nacimiento: function(){
       return  new Date().getFullYear() - this.edad;
    }
}

const persona2 = {
    nombre: 'miguel',
    apellido: 'jimenez',
    profesion:'escultor',
    email: 'correo@correo.com',
    edad:20,
    musica: ['trance', 'Rock', 'grunge'],
    hogar:{
        ciudad:'Guadalajara',
        pais:'mexico'
    },
    nacimiento: function(){
       return  new Date().getFullYear() - this.edad;
    }
}
persona.musica.push('Alternativo');
//console.log(persona.musica[0]);
console.log(persona2.nacimiento());