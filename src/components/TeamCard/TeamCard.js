import { React, useState } from 'react';
import './TeamCard.scss'
import PropTypes from 'prop-types';

const defaultBackgroundColor = 'white';
const defaultTextColor = 'black';

const TeamCard = ({teamName, city, state, mascot, school, primaryColor, secondaryColor, logo}) => (
   <div style={{ backgroundColor: (primaryColor || defaultBackgroundColor), color: (secondaryColor || defaultTextColor) }}>
      <h1>{teamName}</h1>
      <div>{city}</div>
      <div>{state}</div>
      <div>{mascot}</div>
      <div>{school}</div>
      <img className="logo" src={logo} alt='team logo'/>
   </div>
);

TeamCard.propTypes = {
   backgroundColor: PropTypes.string.isRequired,
}

export default TeamCard;
