import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Navbar from './components/navbar/navbar.component';
import {Switch, Route} from 'react-router-dom';
import Pokedex from './pages/pokedex/pokedex.component';
import Pokegame from './pages/pokegame/pokegame.component';

//Check comment
function App() {
  return (
    <div className="main-app">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <Switch>
        <Route exact path="/pokedex/" component={HomePage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/pokedexs" component={Pokedex}></Route>
        <Route path="/pokegame" component={Pokegame}></Route>
      </Switch>
    </div>
  );
}

export default App;
