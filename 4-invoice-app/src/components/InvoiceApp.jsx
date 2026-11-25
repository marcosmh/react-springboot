import { getInvoice } from "../services/getInvoice";



export const InvoiceApp = () => {
    //const invoice = getInvoice();
    const { id, name, client, company, items } = getInvoice();
    const { name: nameClient, lastName, address } = client;
    const { name: nameCompany, fiscalNuber  } = company;
    const { country, city, street, number } = address;

    return (
        <>
            <h1>Invoice App</h1>
            <ul>
                <li>Id: {id} </li>
                <li>Name: {name} </li>
            </ul>

            <h3>Datos del Cliente</h3>
            <ul>
                <li>{nameClient}</li>
                <li>{lastName}</li>
                <li>{country}</li>
                <li>{city}</li>
                <li>{street} {number} </li>
            </ul>

            <h3>Datos de la Empreaa</h3>
            <ul>
                <li>{nameCompany}</li>
                <li>{fiscalNuber}</li>
            </ul>

            <h3>Productos de la Factura</h3>
            <table border={1}>
                <thead>
                    <tr>
                     <th>Producto</th>
                     <th>Precio</th>
                     <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map( ({id, product, price, quantity}) => 
                        (
                            <tr key={id}>
                              <th>{ product }</th>
                              <th>{ price }</th>
                              <th>{ quantity }</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    );
}   