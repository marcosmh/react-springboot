import { getInvoice } from "../services/getInvoice";

export const InvoiceApp = () => {
    //const invoice = getInvoice();
    const { id, name, client, company, items } = getInvoice();
    const { name: nameClient, lastName, address } = client;
    const { name: nameCompany, fiscalNuber  } = company;
    const { country, city, street, number } = address;

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                       <h1>Invoice App</h1>
                    </div>

                     <div className="card-header">
                        <ul className="list-group">
                            <li className="list-group-item">Id: {id} </li>
                            <li className="list-group-item">Name: {name} </li>
                        </ul>

                        <div className="row my-3">
                            <div className="col">
                                <h3>Datos del Cliente</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{nameClient} {lastName} </li>
                                    <li className="list-group-item">{country} / {city}</li>
                                    <li className="list-group-item">{street} {number} </li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Datos de la Empreaa</h3>
                                <ul className="list-group">
                                    <li className="list-group-item active">{nameCompany}</li>
                                    <li className="list-group-item">{fiscalNuber}</li>
                                </ul>
                            </div>
                        </div>
                
                    <h3>Productos de la Factura</h3>
                    <table className="table table-striped table-hoover" border={1}>
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
                </div>
            </div>
        </div>
        </>
    );
}   