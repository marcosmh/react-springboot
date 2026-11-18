import { findInvoiceById  } from './data/invoice';

/*
const promise = new Promise ( (resolve, reject) => {
    setTimeout(() => {
        const result = invoiceById(2);
        if(result) {
            resolve(result);
        } else {
            reject('Error: No existe la Factura con el id!')
        }
        
    },2500);
});
*/

/*
promise.then( ( result ) => {
    console.log( result );
    console.log('Tarea realizada con exito!');
}).catch( ( error ) =>  {
    console.error(error);
});
*/

// promise
//    .then(console.log)
//     .catch(console.err);




findInvoiceById(2)
    .then(console.log)
    .catch(console.err);
