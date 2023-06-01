import { Fragment } from 'react';
import './App.scss';

import List from './components/List/List.js';

function App() {

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
      <List teams={secTeams}/>
    </Fragment>
  );
}

export default App;
