import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";


export const InvoiceApp = () => {

    const { id, name, total, client, company, items: itemsInitial } = getInvoice();
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [quantityValue, setQuantityValue] = useState(0);
    const [items, setItems] = useState(itemsInitial);
    const [counter, setCounter] = useState(4);
    
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
                                <ClientView title='Datos del Cliente' client={client} />
                            </div>
                            <div className="col">
                               <CompanyView title='Datos de la Empresa' company={company} />
                            </div>
                        </div>
                
                    <ListItemsView title='Productos de la Factura' items={items} />
                    <TotalView total={ total } />

                    <form className="w-50" onSubmit={ event => {
                        event.preventDefault();

                        if(productValue.trim().length <= 1) return;
                        if(priceValue.trim().length < 1) return;
                        if(quantityValue.trim() < 1) return;

                        setItems([...items, { 
                            id: 4, 
                            product:productValue, 
                            price: +priceValue, 
                            quantity: parseInt(quantityValue,10) }]);

                            setProductValue('');
                            setPriceValue(0);
                            setQuantityValue(0);
                            setCounter(counter + 1);
                        }}>
                        <input className="form-control m-3" type="text" 
                            name="product" value={productValue} 
                            placeholder="Producto" onChange={ event => { 
                                console.log( event.target.value );
                                setProductValue( event.target.value );
                                }} />
                        <input className="form-control m-3" type="text" 
                            name="price" value={priceValue} 
                            placeholder="Precio" onChange={ event => { 
                                console.log( event.target.value );
                                setPriceValue( event.target.value );
                                }} />
                        <input className="form-control m-3" type="text" 
                            name="quantity" value={quantityValue} 
                            placeholder="Cantidad" onChange={ event => { 
                                console.log( event.target.value );
                                setQuantityValue( event.target.value );
                                }} />
                            
                        <button type="submit" className="btn btn-primary m-3">Nuevo Items</button>
                    </form>

                </div>
            </div>
        </div>
        </>
    );
}   