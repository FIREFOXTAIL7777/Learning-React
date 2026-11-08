export const ProductList = ({ title, price }) => {
    const products = [
        {
            id: 1,
            name: 'Laptop',
            price: 24000,
        },
        {
            id: 2,
            name: 'Phone',
            price: 12000,
        },
        {
            id: 3,
            name: 'Tablet',
            price: 13000,
        },
    ];

    const productElement = products.map((product) => {
        return (
            <div key={product.id}>
                <h3> {product.name} </h3>
                <p>Price: ₱{product.price} </p>
            </div>
        );
    });

    return (
        <div>
            <h2>Our Products</h2>

            {productElement}
        </div>
    );
};
