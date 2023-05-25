import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper } from './List.styled';

import TeamCard from '../TeamCard/TeamCard';

const List = ({teams}) => (
 <ListWrapper data-testid="List">
    {teams.map((team) => {
      <TeamCard
         key={team.id}
         teamName={team.team_name}
         city={team.city}
         state={team.state}
         mascot={team.mascot}
         school={team.school}
      />
    })}
 </ListWrapper>
);

List.propTypes = {};

List.defaultProps = {};

export default List;
