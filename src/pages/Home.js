import { React } from 'react';

const handleClick = () => {
    console.log('Teams!');
};

const Home = () => {
    return (
        <button type='button' onClick={handleClick}>Teams</button>
    );
}

export default Home;