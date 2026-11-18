
const user = {
    username: 'Anakin',
    email: 'anakin@starwars.com',
    age: 30,
    ranking: 9
}


const detail = ({ username, email }) => {
    console.log(`El detalle del usuario ${username} con correo ${email}`);
}

detail(user);