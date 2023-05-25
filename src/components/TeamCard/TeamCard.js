import React from 'react';
import PropTypes from 'prop-types';
import { TeamCardWrapper } from './TeamCard.styled';

const TeamCard = ({teamName, city, state, mascot, school}) => (
 <TeamCardWrapper data-testid="TeamCard">
    <h1>{teamName}</h1>
    <div>{city}</div>
    <div>{state}</div>
    <div>{mascot}</div>
    <div>{school}</div>
 </TeamCardWrapper>
);

TeamCard.propTypes = {};

TeamCard.defaultProps = {};

export default TeamCard;
