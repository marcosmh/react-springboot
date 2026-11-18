
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

console.log(invoice);
console.log("\n");

const invoice2 = invoice;

const invoice3 = {...invoice}

const result = invoice == invoice2;
const result2 = invoice == invoice3;

if(result)
    console.log(result);
else 
    console.log('No son iguales');


if(result2)
    console.log(result2);
else 
    console.log('No son iguales');