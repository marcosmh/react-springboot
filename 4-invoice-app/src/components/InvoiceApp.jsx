import { getInvoice } from "../services/getInvoice";
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";

export const InvoiceApp = () => {

    const { id, name, client, company, items } = getInvoice();
    
    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                       <h1>Invoice App</h1>
                    </div>

                     <div className="card-header">
                       <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView client={client} />
                            </div>
                            <div className="col">
                               <CompanyView title='Datos del Cliente' company={company} />
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