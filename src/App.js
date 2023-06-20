import { React } from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar.js';

import List from './components/List/List.js';

const App = () => (
  // const [teams, setTeams] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/teams')
  //     .then(res => res.json())
  //     .then(data => {
  //       setTeams(data);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }, []);

  // return (
  //   <Fragment>
  //     <List teams={teams}/>
  //   </Fragment>
  // );
  <NavBar />
);

export default App;
