// import cardImage from './assets/card-img.jpg';

export const Card = ({ cardImage, title, description }) => {
    return (
        <div className="card">
            <img className="card-img" src={cardImage} alt="Card Image" />
            <h2> {title} </h2>
            <p> {description} </p>
        </div>
    );
};
