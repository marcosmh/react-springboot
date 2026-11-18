let firstname = 'Anakin';
const lastname = 'Skywalker';
const condicion = true;

console.log('Hola mundo ' + firstname + ' ' + lastname);

if(condicion) {
    const lastname = 'Sky';
    console.log(lastname);
}

console.log('Hola mundo ' + firstname + ' ' + lastname);

console.log(`Hola mundo ${firstname} ${lastname}`);