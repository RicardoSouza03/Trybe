import React from 'react';
import './App.css';
import data from './data';
import Pokedex from './Components/Pokedex'

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Pokedex</h1>
        </header>
        <Pokedex data={data} />
      </>
    );
  }
}

export default App;