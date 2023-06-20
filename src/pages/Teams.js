import { React, Fragment, useState, useEffect } from 'react';

import List from '../components/List/List.js';

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
        <Fragment>
            <List teams={teams}/>
        </Fragment>
    );
}

export default Teams;