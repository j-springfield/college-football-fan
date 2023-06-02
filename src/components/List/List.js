import React from 'react';
import './List.scss';
import ncaaLogo from './../../assets/NCAA_football_icon_logo.svg.png';

import TeamCard from '../TeamCard/TeamCard.js';

const List = ({teams}) => (
   <ul>
      {teams.map((team) => {
         const logo = team.logos ? team.logos[0] : ncaaLogo;

         if(team.mascot) return <li key={team.id}>
            <TeamCard
               teamName={`${team.school} ${team.mascot}`}
               city={team.location.city}
               state={team.location.state}
               mascot={team.mascot}
               school={team.school}
               primaryColor={team.color}
               secondaryColor={team.alt_color}
               logo={logo}
            />
         </li>
      })}
   </ul>
);

export default List;
