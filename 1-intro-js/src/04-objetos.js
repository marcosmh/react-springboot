
const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: 'Jhon Doe',
    total: 1000
};

const invoice2 = {
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
        return `Hola, |${invoice2.client.name}`;
    }
};

invoice.client = 'Anakin Skywalker';
//invoice.total = 5000;

invoice2.client.name = 'Mace Windu';
console.log(invoice);
console.log(invoice2);

const greating = invoice2.greeting()
console.log(greating);

const greating2 = invoice2.greating2();
console.log(greating);

console.log('Total: ' + invoice2.total());

    