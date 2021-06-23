// --- Default params y concatenación
// Antes
function newFuction(name, age, contry) {
  var name = name || 'ginna';
  var age = age || 19;
  var country = country || 'Colombia'
  console.log(name, age, country);
}

// Ecmascript+6
function newFunction2(name = 'Ginna', age = 19, country = 'Colombia' ) {
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '26', 'Colombia')

// Antes
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Ecmascript+6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// --- Let y Const, Multilinea, Spread Operator y Desestructuracion

//Antes multilinea
let lorem = 'Quiero escribir una frase epica \n'
+ 'otra frase epica';

// Ecmascript+6 No hace falta añadir el \n y + para concatenar, solo dar enter y continuar
let lorem2 = `otra frase epica
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

// Destructuracion de elementos
let person = {
  'name': 'Ginna',
  'age': 19,
  'country': 'Colombia'
}
// Antes como se traia las cosas
console.log(person.name, person.age, person.country);

// Ecmascript+6
let {age, country} = person;
console.log (age, country);

// --- Propagacion, nos permite expandir varios elementos

let team1 = ['Ginna', 'Julian', 'Michi'];
let team2 = ['Valentina', 'Petra', 'Larry'];

let education = ['David', ...team1, ...team2];

console.log(education);


// Var corre global, pero Let corre en el bloque en donde esta asignado
{
  var globalVar = 'Global Var';
}
{
  let globalLet = 'Global Let';
  console.log(globalLet);
}
console.log(globalVar);

// Const establece una variable que no se deja reasignar
const a = 'b';
a = 'a';
console.log(a);

// ---- Arrow Functions, Promesas y Parámetros en objetos
// Antes es5
let name = 'Ginna';
let age = 19;

obj = { name: name, age: age };
// Ecmascript+6
obj2 = {name, age};
console.log(obj2)

// Arrow functions
const names = [
  {name: 'Ginna', age: 19,},
  {name: 'Julian', age: 30}
]
// antes funcion anonima
let listOfNames = names.map(function(item) {
  console.log(item.name);
})
// ecmascript+6 la funcion anonima pasa por el => y retorana algo
let listOfNames = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  ... // lo que necesito
}

// Solo un parametro
const listNames4 = name => {
  ... // lo que necesito
}

// Permite sin llaves y sin return que funcione y devuelva 
const square = num => num * num;

// Promesas. Js no ejecuta cosas al mismo tiempo, va de un elmento en un elemento. 
// Algo va a pasar = Promesa
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}
// Pasos de promesa: 1. Asiganamos una funcion arrary function 2. Retornamos una Promesa 3. Algo va a pasar

helloPromise()
 .then(response => console.log(response))
 .then(() => console.log('hola')) // añadi por probar
 .catch(error => console.log(error));

// Se pueden añadir mas then en la promesa

// ---- Clases, Módulos y Generadores
// Programación orientada a objetos
class calculator {
  constructor () {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB
  }
}
const calc = new calculator();
console.log(calc.sum(2,2));

// Modulos Import/Export de otro documento
import {hello} from './module';
hello();

// Genereitos es una función especial que retorna una serie de valores segun el altgormo definido
// el * aclara que es un genereito
function* helloWorld() {
  if(true){
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
