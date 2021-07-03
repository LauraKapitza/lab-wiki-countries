import './App.css';
import CountriesList from './components/CountriesList.js';
import CountryDetails from './components/CountryDetails.js';
import JSON from './countries.json';
import Navbar from './components/Navbar.js';
import React from 'react';

import {
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  state = {
    countries: JSON.slice()
  }
  
  render() {
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
    )
  }
}

export default App;
