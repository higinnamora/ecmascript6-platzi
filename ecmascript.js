// Default params y concatenación
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

// Let y Const, Multilinea, Spread Operator y Desestructuracion

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

// Propagacion, nos permite expandir varios elementos

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