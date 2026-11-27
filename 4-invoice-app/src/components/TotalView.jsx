export const TotalView = ({ total }) => {
    return (
        <>
          <div className="text-end m-3">
            <span className="badge bg-success" > <h4>$ { total }</h4></span>
          </div>
        </>
    );
}