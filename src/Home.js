import { Link } from 'react-router-dom';

const Home = (props) => {
    const colors = props.colors;
    return (
        <>
            <h1>Welcome to the Color Factory!</h1>
            <h4>Please select a color.</h4>
            {colors.map(color => (
                <Link to={`colors/${color}`}>{color}</Link>
            ))}
        </>
    )
}

export default Home;