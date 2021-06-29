// Versión 9
// Es el operador de reposo el cual puede extraer las propiedades de un objeto
// que aun no se ha construido

const obj = {
  name: 'Ginna',
  age: 19,
  country: 'Colombia'
};
// operador de reposo
let { name, ...all} = obj;
console.log(name, all);
// Establecemos lo que necesitemos
console.log(all);


// Utilizando las propiedades de propagaciones se podra unir uno o dos más elementos de objetos a un objeto usando ...objt
const obj = {
  name: 'Ginna',
  age: 19,
}

const obj1 = {
  ...obj,
  country: 'Colombia',
}
console.log(obj1);


// Nueva: Llamar cuando ha terminado lo que debia hacer 
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Hello World'), 3000)
    : reject(new Error('Test Error'))
  });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo')) // Llamado

// Mejoras: como podemos agrupar grupos de regex
const regexData = /([0─9]{4})─([0─9{2}])─([0─9]{2})/
const match = regexData.exec('2018─04─20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
