import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Game from '../pages/Game';
import Ranking from '../pages/Ranking';
import Deck from '../pages/Deck';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';

export default class Routes extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/ranking" component={ Ranking } />
        <Route exact path="/deck" component={ Deck } />
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}