import { React } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/teams');
    };

    return (
        <button type='button' onClick={handleClick}>Teams</button>
    );
}

export default Home;