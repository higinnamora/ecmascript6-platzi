// Versión ecmascript 8
//Object entries deveule los valores de una matriz.

const data = {
  front:'Ginna',
  back: 'Julian',
  design: 'Angelica',
};

//Tranformar este objeto en una matriz. 
const entries = Object.entries(data);
console.log(entries);
//Si queremos saber cuantos elementos posee nuestro arreglo ahora es posible con length
console.log(entries.length);

//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 

const data= {
  front:'Ginna',
  back: 'Julian',
}

const values = Object.values(data);
console.log(values);

// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data = {
  front:'Ginna', // Puede existir
  back: 'Julian',
}

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
}

helloAsync()

// Forma de manejar los errores para aplicar en async
const anothorFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello)
  } catch (error) {
    console.log(error);
  }
}

anothorFunction();