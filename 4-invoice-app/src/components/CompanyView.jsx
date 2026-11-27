import PropTypes from "prop-types";

export const CompanyView = ({ title ,company }) => {

    if (import.meta.env.DEV) {
        PropTypes.checkPropTypes(
            CompanyView.propTypes,
            { title, company },
            "prop",
            "CompanyView"
        );
    }

    const { name: nameCompany, fiscalNuber  } = company;
   
    return (
        <>
            <h3>{ title }</h3>
            <ul className="list-group">
                <li className="list-group-item active">{nameCompany}</li>
                <li className="list-group-item">{fiscalNuber}</li>
            </ul>
        </>
    );

}


CompanyView.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired
}