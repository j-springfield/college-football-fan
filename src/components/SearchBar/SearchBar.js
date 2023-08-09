import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({teams, setFilteredTeams}) => {
   const [text, setText] = useState('');
   const [suggestions, setSuggestions] = useState([]);

   useEffect(() => {
      if (text.length > 0) {
         const regex = new RegExp(`^${text}`, `i`);
         setSuggestions(teams.sort().filter(team => regex.test(team.school)));
         setFilteredTeams(suggestions);
      }
      else {
         setSuggestions([]);
         setFilteredTeams([]);
      }
   }, [text])

   const onTypeEvent = (e) => {
      setText(e.target.value);
      if (text.length > 0) {
         const regex = new RegExp(`^${text}`, `i`);
         setSuggestions(teams.sort().filter(team => regex.test(team.school)));
         setFilteredTeams(suggestions);
      } else {
         setSuggestions([]);
         setFilteredTeams([]);
      }
   }
   
   const selectSuggestion = (value) => {
      setText(value);
      setSuggestions([]);
   }
   
   const getSuggestions = () => {
      return (
         <ul>
            {suggestions.map( team => <li key={team.school}>{team.school}</li> )}
         </ul>
      )
   }

   return (
      <div>
         <input onChange={onTypeEvent} placeholder='Search for a team...' value={text} type='text' />
         {suggestions.length > 0 && getSuggestions()}
      </div>
   )
};

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
