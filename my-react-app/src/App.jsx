import { Header } from './Header';
import { Footer } from './Footer';
import { Card } from './Card';
import { Student } from './Student';
import { Product } from './Product';
import cardImg from './assets/card-img.jpg';
import { CardWrapper } from './CardWrapper';
import { ProductList } from './ProductList';
import { Counter } from './Counter';
import { LoginCard } from './LoginCard';

function App() {
    return (
        <>
            <Header />
            <h3>This is a sample for State: "useState()"</h3>
            <div className="h-container">
                <Counter />
                <LoginCard />
            </div>

            <br />
            <br />
            <br />
            <hr />

            <h1>
                <u>Passing JSX as Child</u>
            </h1>
            <CardWrapper title="User Profile">
                <p>John Lenard Adora</p>
                <p>johnlenardadora@jl.com</p>
                <button>Edit Profile</button>
            </CardWrapper>

            <hr />

            <Card
                cardImage={cardImg}
                title="Orange"
                description="This is a description about this product"
            />
            <Card
                cardImage={cardImg}
                title="Orange"
                description="This is a description about this product"
            />
            <Card
                cardImage={cardImg}
                title="Orange"
                description="This is a description about this product"
            />
            <Card
                cardImage={cardImg}
                title="Orange"
                description="This is a description about this product"
            />

            <hr />
            <br />

            <Student name="Jason" age={21} isStudent={true} />
            <Student name="Borne" age={30} isStudent={false} />

            <hr />
            <br />

            <div className="fruit-table">
                <Product
                    title="Orange"
                    price={50.54}
                    inStock={true}
                    categories={['fruits', 'desert', 'snacks']}
                />
                <Product
                    title="Apple"
                    price={60.72}
                    inStock={true}
                    categories={['fruits', 'desert', 'snacks']}
                />
            </div>

            <br />
            <hr />

            <ProductList title="Laptop" price={24000} />

            <hr />
            <br />

            <Footer />
        </>
    );
}

export default App;
