export const CompanyView = ({ title ,company }) => {
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