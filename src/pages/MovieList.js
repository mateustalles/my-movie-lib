import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState((state) => (
        { movies: [...state.movies, movies] })));
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) return <Loading />;

    return (
      <>
        <div className="row movie-list">
          <div>
            <Link className="add-movie-button" to="../movies/new/">
                ADICIONAR CARTÃO
            </Link>
          </div>
          <div className="movie-list">
            {movies[0].map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          </div>
        </div>
      </>
    );
  }
}

export default MovieList;
