import React from 'react';
import './List.scss';

import TeamCard from '../TeamCard/TeamCard.js';

const List = ({teams}) => (
   <ul>
      {teams.map((team) => {
         return <li>
            <TeamCard
               key={team.id}
               teamName={`${team.school} ${team.mascot}`}
               city={team.location.city}
               state={team.location.state}
               mascot={team.mascot}
               school={team.school}
               primaryColor={team.color}
               secondaryColor={team.alt_color}
            />
         </li>
      })}
   </ul>
);

export default List;
