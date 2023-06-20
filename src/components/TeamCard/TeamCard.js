import { React, useState, useEffect } from 'react';
import './TeamCard.scss'

const defaultBackgroundColor = 'white';
const defaultTextColor = 'black';

const TeamCard = ({teamName, city, state, mascot, school, primaryColor, secondaryColor, logo}) => {
   const [backgroundColor, setBackgroundColor] = useState(primaryColor);
   const [color, setColor] = useState(secondaryColor);
   
   useEffect(() => {
      if (!backgroundColor) setBackgroundColor(defaultBackgroundColor);
      if (!color && backgroundColor === '#000000') setColor(defaultBackgroundColor);
      else if (!color) setColor(defaultTextColor);
   })
   
   return (
      <div style={{ backgroundColor: backgroundColor, color: color }}>
         <h1>{teamName}</h1>
         <div>{city}</div>
         <div>{state}</div>
         <div>{mascot}</div>
         <div>{school}</div>
         <img className='logo' src={logo} alt='team logo'/>
      </div>
   );
};

TeamCard.propTypes = {}

export default TeamCard;
