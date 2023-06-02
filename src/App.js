import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

import List from './components/List/List.js';

function App() {
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

  const secTeams = [
    {
      "id": 1,
      "team_name": "Georgia Bulldogs",
      "city": "Athens",
      "state": "Georgia",
      "mascot": "Hairy Dawg",
      "school": "University of Georgia",
      "primary_color": "#BA0C2F",
      "secondary_color": "#000000", 
    },
    {
      "id": 2,
      "team_name": "Alabama Crimson Tide",
      "city": "Tuscaloosa",
      "state": "Alabama",
      "mascot": "Big Al",
      "school": "University of Alabama",
      "primary_color": "#9E1B32",
      "secondary_color": "#828A8F",
    },
    {
      "id": 3,
      "team_name": "Florida Gators",
      "city": "Gainesville",
      "state": "Florida",
      "mascot": "Albert and Alberta Gator",
      "school": "University of Florida",
      "primary_color": "#0021A5",
      "secondary_color": "#FA4616",
    }
  ];

  return (
    <Fragment>
      <List teams={teams}/>
    </Fragment>
  );
}

export default App;
