import logo from './logo.svg';
import './App.css';

import List from './components/List/List';

function App() {

  const secTeams = [
    {
      "id": 1,
      "team_name": "Georgia Bulldogs",
      "city": "Athens",
      "state": "Georgia",
      "mascot": "Hairy Dawg",
      "school": "University of Georgia",
    },
    {
      "id": 2,
      "team_name": "Alabama Crimson Tide",
      "city": "Tuscaloosa",
      "state": "Alabama",
      "mascot": "Big Al",
      "school": "University of Alabama",
    },
    {
      "id": 3,
      "team_name": "Florida Gators",
      "city": "Gainesville",
      "state": "Florida",
      "mascot": "Albert and Alberta Gator",
      "school": "University of Florida",
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <List teams={secTeams}/>
    </div>
  );
}

export default App;
