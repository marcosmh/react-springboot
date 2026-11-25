import { getInvoice } from "../services/getInvoice";
import { ClientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./InvoiceView";
import { ListItemsView } from "./ListItemsView";

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
                
                    <ListItemsView title='Productos de la Factura' items={items} />
                </div>
            </div>
        </div>
        </>
    );
}   