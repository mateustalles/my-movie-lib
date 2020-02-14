import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  MovieList, NewMovie, EditMovie, NotFound, MovieDetails,
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:id/edit/" component={EditMovie} />
        <Route path="/movies/new/" component={NewMovie} />
        <Route path="/movies/:id/" component={MovieDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
