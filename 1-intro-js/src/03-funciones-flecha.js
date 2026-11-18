// Funcion flecha

const sayHello = (name = 'Anakin', age = 0) => {
    return `Hola mundo! ${name} ${age}`;
}

const sayHello2 = (name = 'Yoda', age = 900) => `Hola mundo! ${name} ${age}`;

const add = (a = 0, b = 0) => a + b;

const result = sayHello("Luke",30);
const result2 = sayHello2("Mace Windu",30);
const result3 = add(12,3);

console.log(result);
console.log(result2);
console.log(result3);