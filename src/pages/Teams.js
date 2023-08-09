import { React, useState, useEffect } from 'react';

import List from '../components/List/List.js';
import SearchBar from '../components/SearchBar/SearchBar.js';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/teams')
        .then(res => res.json())
        .then(data => {
            setTeams(data);
        })
        .catch(err => {
            console.error(err);
        });
    }, []);

    return (
        <>
            <SearchBar teams={teams} setTeams={setTeams}/>
            <List teams={teams}/>
        </>
    );
}

export default Teams;