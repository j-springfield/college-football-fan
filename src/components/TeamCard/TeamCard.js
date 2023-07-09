import { React, useState, useEffect } from 'react';
import './TeamCard.scss'

import ncaaLogo from './../../assets/NCAA_football_icon_logo.svg.png';

const defaultBackgroundColor = 'white';
const defaultTextColor = 'black';

const TeamCard = ({teamName, city, state, mascot, school, primaryColor, secondaryColor, image}) => {
   const [backgroundColor, setBackgroundColor] = useState(primaryColor);
   const [color, setColor] = useState(secondaryColor);
   const [logo, setLogo] = useState(image)

   const handleImageError = () => {
      setLogo(ncaaLogo)
   }
   
   useEffect(() => {
      if (!backgroundColor) setBackgroundColor(defaultBackgroundColor);
      if (!color && backgroundColor === '#000000') setColor(defaultBackgroundColor);
      else if (!color) setColor(defaultTextColor);
   }, [backgroundColor, color])
   
   return (
      <div style={{ backgroundColor: backgroundColor, color: color }}>
         <h1>{teamName}</h1>
         <div>{city}</div>
         <div>{state}</div>
         <div>{mascot}</div>
         <div>{school}</div>
         <img className='logo' src={logo} onError={handleImageError} alt='team logo'/>
      </div>
   );
};

TeamCard.propTypes = {}

export default TeamCard;
