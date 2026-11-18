
const url = 'https://jsonplaceholder.typicode.com/users';

const httpClient = fetch(url);

/*
httpClient.then( (response) => {
    response.json().then( data => {
        console.log(data);
    });
});
*/


httpClient
    .then( response => response.json() )
    .then( data => console.log(data) )
    .catch( error => console.log(error));