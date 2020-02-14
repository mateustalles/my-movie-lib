import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath } = movie;
    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card movie-card">
            <div className="card-image">
              <img alt="Movie Cover" className="movie-card-image" src={`${imagePath}`} />
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>{storyline}</p>
            </div>
            <div className="card-action">
              <Link to={`./movies/${movie.id}/`}>
                VER DETALHES
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
