export const TotalView = ({ total }) => {
    return (
        <>
          <div className="text-end">
            <span className="badge bg-success" > <h4>$ { total }</h4></span>
          </div>
        </>
    );
}