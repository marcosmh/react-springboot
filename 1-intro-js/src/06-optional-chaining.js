
const invoice = {
    id: 11,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Rocky',
        lastname: 'Silvestre',
        age: 20
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
        {
            product: 'paper',
            price: 100,
            quantity: 10
        },
    ],
    total: function() {
        let total = 0;
        this.items.forEach( item => {
            total = total + item.price * item.quantity;
        });
        return total;
    },
    greeting: function() {
        return `Hola, ${this.client.name}`;
    },
    greating2: () => {
        return `Hola, ${invoice2.client.name}`;
    }
};


console.log( invoice.company?.name );
console.log( invoice.client?.name );
console.log( invoice.client?.address?.name );

if(invoice.company?.name ) {
    console.log('Perfecto!!!');
} else {4
    console.log('No vienen datos de la empresa');
}