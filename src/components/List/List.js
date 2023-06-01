import React from 'react';
import './List.scss';

import TeamCard from '../TeamCard/TeamCard.js';

const List = ({teams}) => (
   <ul>
      {teams.map((team) => {
         return <li>
            <TeamCard
               key={team.id}
               teamName={team.team_name}
               city={team.city}
               state={team.state}
               mascot={team.mascot}
               school={team.school}
               primaryColor={team.primary_color}
               secondaryColor={team.secondary_color}
            />
         </li>
      })}
   </ul>
);

export default List;
