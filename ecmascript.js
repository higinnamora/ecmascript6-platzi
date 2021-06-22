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