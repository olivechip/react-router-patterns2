import { useParams } from 'react-router-dom';

const Color = () => {
    const { name } = useParams();
    console.log(name)
    return (
        <>
            <div>This is the color, <b>{name}</b>.</div>

            <div style={{
                marginTop: '2em',
                width: '50px',   
                height: '50px',  
                borderRadius: '50%', 
                backgroundColor: `${name}` 
            }}></div>

        </>

    )
}

export default Color;