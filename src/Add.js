import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Add = ({ addColor }) => {
    const [red, setRed] = useState('');
    const [green, setGreen] = useState('');
    const [blue, setBlue] = useState('');
    const navigate = useNavigate();
    
    const handleRedChange = (e) => {
        setRed(e.target.value);
    }

    const handleGreenChange = (e) => {
        setGreen(e.target.value);
    }

    const handleBlueChange = (e) => {
        setBlue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const color = `rgb(${red},${green},${blue})`;
        addColor(color);
        navigate("/colors");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='number' required placeholder="Red" value={red} onChange={handleRedChange} min="0" max="255" />
                <input type='number' required placeholder="Green" value={green} onChange={handleGreenChange} min="0" max="255" />
                <input type='number' required placeholder="Blue" value={blue} onChange={handleBlueChange} min="0" max="255" />
                <br />
                <button type="submit">Submit</button>
            </form>

            <Link to="/colors" style={{margin: "2rem"}}>Back</Link>
        </>
    )
}

export default Add;