// Default params y concatenación
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

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Ecmascript+6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)