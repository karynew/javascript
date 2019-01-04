//string to number 2


const numero1 = "50" ;
      numero2 = 10;
      numero3 = "tres";

      let dato;

      dato = Number("20");
      dato = Number("20.123466");
      dato = Number(true);
      dato = Number(null);
      dato = Number(undefined);
      dato = Number ("Hola mundo");
      dato = Number ([1,2,3,4,5]);

      //parseFloat ParseInt
      dato = parseInt('100');
      dato = parseFloat('100');
      dato = parseFloat('100.2030');
      dato = parseInt('100.2030');

      //toFixed solo aplica en numeros
    
      dato = 134234234;
      dato = 134234234.903740237423;

      //parseInt and toFixed together

      dato = '12389450';
    console.log(parseInt(dato).toFixed(3));
      console.log(dato.toFixed(3));
      console.log(typeof dato);
