
// DOM

const url = 'https://jsonplaceholder.typicode.com/users';


const findAllUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    const ul = document.createElement('ul');
    
    users.forEach( user => {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.append(li);
        console.log(user.name);
    });
    document.getElementById('root').append(ul);
}

findAllUsers();
