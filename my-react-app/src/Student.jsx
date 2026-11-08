export const Student = ({ name, age, isStudent }) => {
    const style = {
        background: 'beige',
        maxWidth: '100%',
        textAlign: 'start',
        border: 'solid 1px',
        padding: '10px 30px',
        marginBottom: '20px',
    };

    return (
        <div className="student" style={style}>
            <p>Name: {name} </p>
            <p>Age: {age} </p>
            <p>Student: {isStudent ? 'Yes' : 'No'} </p>
        </div>
    );
};
