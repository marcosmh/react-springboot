

function sayHello() {
    console.log('Hola Mundo desde JavaScript');
}


function greating() {
    greating = 'Hola Mundo desde JS';

    return greating;
}

function greating2(name) {
    greating = `Hola ${name}`;

    return greating;
}

sayHello();

const result = greating();
const result2 = greating2('Mace Windu');

console.log(result);
console.log(result2);