import { invoices, papper, invoiceByNameClient } from './data/invoice';

// import invoiceByNameClient , { invoices, papper } from './data/invoice';


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

const clientName = invoiceByNameClient('Mace');
console.log(invoiceByNameClient('Han'));
console.log(clientName);

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
