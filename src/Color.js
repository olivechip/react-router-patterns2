import { Link, useParams } from 'react-router-dom';

const Color = () => {
    const { color } = useParams();

    return (
        <>
            <div>This is the color, <b>{color}</b>.</div>

            <div style={{
                margin: '2em',
                width: '50px',   
                height: '50px',  
                borderRadius: '50%', 
                backgroundColor: `${color}` 
            }}></div>

            <Link to="/colors">Back</Link>
        </>

    )
}

export default Color;