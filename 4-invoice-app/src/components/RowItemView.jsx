export const RowItemView = ({ product, price, quantity }) => {
    return (
        <>
            <tr>
              <th>{ product }</th>
              <th>{ price }</th>
              <th>{ quantity }</th>
            </tr>
        </>
    );
}