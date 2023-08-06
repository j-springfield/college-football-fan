import { React } from 'react';
import './About.scss';
import jay from '../assets/JaySpringfield.jpg';

const About = () => {
    return (
        <>
            <h2>Jay Springfield</h2>

            <img alt='Jay Springfield' class='jay-photo' src={jay} />

            <p>Senior software engineer (70/30 front-end/backend split) with six and a half years of experience in various frontend development frameworks (React, Angular, VueJS), object-oriented programming, some back-end
development, scripting, Agile/Scrum practices, and deploying and supporting production level, customer-facing
applications.</p>
        </>
    );
}

export default About;