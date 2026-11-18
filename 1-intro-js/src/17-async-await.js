
const url = 'https://jsonplaceholder.typicode.com/users';

const httpClient = fetch(url);

/*
httpClient
    .then( response => response.json() )
    .then( data => console.log(data) )
    .catch( error => console.log(error));
*/

const findAllUsers = async () => {
    const response = await fetch(url);
    return await response.json();
    
}

const users = await findAllUsers();
console.log(users);