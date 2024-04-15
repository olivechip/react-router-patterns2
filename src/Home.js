import { Link } from 'react-router-dom';

const Home = ({ colors }) => {

    return (
        <>
            <h1>Welcome to the Color Factory!</h1>
            <h4><Link to="/colors/new">Add a color here.</Link></h4>
            <h4>Please select a color.</h4>
            {colors.map((color, index) => (
                <Link key={index} to={`/colors/${color}`}>{color}</Link>
            ))}
        </>
    )
}

Home.defaultProps = {
    colors: []
};

export default Home;

