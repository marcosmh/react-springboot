/*
export function HelloWorld({user ,id}) {
    //return <div>Hola, Que la fuerza te acompañe</div>;
    const name = 'Anakin';
    return (
        <>
            <h1>Hola, { name }</h1>
            <div>Que la fuerza te acompañe</div>
            <div>Hello There, { id } - { user }</div>
        </>
    );
}
*/

import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";


export const HelloWorld = ({user ,id, title = 'Sin Titulo', book}) => {

    const names = 'Anakin';

    if(typeof title !== 'string') {
        console.warn('HelloWorld: "title" debe ser un string.');
    }

    if(typeof id !== 'number') {
        console.warn('HelloWorld: "id" debe ser un id.');
    }

    if(typeof user !== 'object') {
        console.warn('HelloWorld: "user" debe ser un objet.');
    }

    if(typeof book !== 'string') {
        console.warn('HelloWorld: "book" debe ser un string.');
    }

    
    return (
        <>
            <Title title={ title } />
            <UserDetails 
                names={ names } 
                id={ id } 
                user={ user } />
            <Book book={ book } />
        </>
    );
}




/*
HelloWorld.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
}
*/