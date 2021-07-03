import './App.css';
import Navbar from './components/Navbar.js';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js'

import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex-row-container">
        <CountriesList />
        <Switch>
          <Route exact path='/:id' component={CountryDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
