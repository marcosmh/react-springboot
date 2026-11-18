
const papper = {
    product: 'papper',
    price: 100,
    quantity: 10
};

const invoices = [
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

// MAP
console.log('--- map ---');
const invoicesClone = invoices.map( i => {
    return i.name;
});

console.log(invoices);
console.log(invoicesClone);

const invoicesClient = invoices.map( i => {
    return i.client.name;
});

console.log(invoicesClient);

// FIND
console.log('--- find ---');
const invoiceById = invoices.find( i => i.id == 3);
console.log(invoiceById);

const invoiceByName = invoices.find( i => i.name == 'Compras de oficina');
console.log(invoiceByName);

const invoiceByClientName = invoices.find( i => i.client.name == 'Han');
console.log(invoiceByClientName);

console.log('--- filter ---');
const invoiceFilter1 = invoices.filter( i => i.id > 1);
console.log(invoiceFilter1);

const invoiceFilter2 = invoices.filter( i => i.items.includes(papper));
console.log(invoiceFilter2); 

const invoiceFilter3 = invoices.filter( i => i.id != 2 );
console.log(invoiceFilter3); 

console.log('--- some ---');
const invoiceSome1 = invoices.some( i => i.client.name == 'Han' );
console.log(invoiceSome1);