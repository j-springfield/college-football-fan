import { React, useState, useEffect } from 'react';

import List from '../components/List/List.js';
import SearchBar from '../components/SearchBar/SearchBar.js';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data);
        })
        .catch(err => {
            console.error(err);
        });
    }, [filteredTeams]);

    return (
        <>
            <SearchBar teams={teams} setFilteredTeams={setFilteredTeams}/>
            <List teams={filteredTeams.length > 0 ? filteredTeams : teams}/>
        </>
    );
}

export default Teams;