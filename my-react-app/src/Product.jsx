export const Product = ({ title, price, inStock, categories }) => {
    const style = {
        border: 'solid 1px black',
    };

    return (
        <div style={style}>
            <h1>{title} </h1>
            <h3>Price: ₱{price} </h3>
            <p>In Stock: {inStock ? 'Yes' : 'No'} </p>
            <p>Categories: {categories.join(', ')} </p>
        </div>
    );
};
