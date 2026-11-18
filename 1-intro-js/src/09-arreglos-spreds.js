
const products = ['mesa','silla','notebook','teclado'];
products.push('pantalla lcd','sony tv');

const products2 = products.concat(['audifonos','mouse'])

const fruits = ['peras','manzanas','sandias','frutillas'];

const mercado = [...products,...fruits, 'lechugas','papas','uvas'];

const mercado2 = products2.concat(fruits).concat('lechugas','papas','uvas');

console.log('Products: ')
console.log(products);

console.log('Products2: ')
console.log(products2);

console.log('Fruits: ')
console.log(fruits);

console.log('Mercado: ')
console.log(mercado);

console.log('Mercado2: ')
console.log(mercado2);


