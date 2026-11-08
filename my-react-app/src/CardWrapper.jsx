export const CardWrapper = ({ title, children }) => {
    return (
        <div className="user-card">
            <h2> {title} </h2>
            <div className="card-content">{children}</div>
        </div>
    );
};
