export const papper = {
    product: 'papper',
    price: 100,
    quantity: 10
};


export const invoices = [
    {
        id: 1,
        name: 'Compras de oficina',
        client: {
            name: 'Anakin',
            lastname: 'Skywalkwer',
        },
        items: [
            {
                product: 'keyboard',
                price: 399,
                quantity: 2
            },
            {
                product: 'mouse',
                price: 200,
                quantity: 1
            },
            papper
        ]
   },
   {
        id: 2,
        name: 'Compras de computacion',
        client: {
            name: 'Han',
            lastname: 'Solo',
        },
        items: [
            {
                product: 'keyboard',
                price: 399,
                quantity: 2
            },
            {
                product: 'pantalla 17',
                price: 800,
                quantity: 1
            },
            {
                product: 'cpu intel',
                price: 1000,
                quantity: 10
            },
        ]
   },
   {
        id: 3,
        name: 'Compras de papeleria',
        client: {
            name: 'Mace',
            lastname: 'Windu',
        },
        items: [
            {
                product: 'pencil',
                price: 50,
                quantity: 1
            },
            papper
        ]
   }

];

export const invoiceByNameClient = (clientName) => {
    return invoices.find( i => i.client.name == clientName);
}


export const invoiceById = (id) => {
    return invoices.find( i => i.id == id);
}


export const findInvoiceById = (id) => {

    const promise = new Promise ( (resolve, reject) => {
    setTimeout(() => {
        const result = invoiceById(id);
        if(result) {
            resolve(result);
        } else {
            reject('Error: No existe la Factura con el id!')
        }
        
    },2500);

   });
    return promise;
}




/*
export default invoiceByNameClients = (clientName) => {
    return invoices.find( i => i.client.name == clientName);
}
*/

// borrar los exports de las constantes 
// y se puede exportar de esta forma
/*
export {
    papper,
    invoices,
    invoiceByNameClient
}
*/