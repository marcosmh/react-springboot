import PropTypes from "prop-types";

export const InvoiceView = ({id, name}) => {

    if (import.meta.env.DEV) {
        PropTypes.checkPropTypes(
            InvoiceView.propTypes,
            { id, name },
            "prop",
            "InvoiceView"
        );
    }

    return (
        <>
             <ul className="list-group">
                <li className="list-group-item">Id: {id} </li>
                <li className="list-group-item">Name: {name} </li>
            </ul>
        </>
    );
}

InvoiceView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}