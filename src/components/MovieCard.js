import React from 'react';
import { addFav, removeFromFav } from '../actions';

class MovieCard extends React.Component {

  handleFavClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFav(movie))
  }


  handleUnFavClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFromFav(movie));
  }

    render() {
        const { movie, isFav } = this.props;
        return (
            <div className="movie-card">
              <div className="left">
                  <img alt="Movie-poster" src={movie.Poster} />
              </div>
              <div className="right">
                  <div className="title ">{ movie.Title } </div>
                  <div className="plot ">{ movie.Plot } </div>
                  <div className="footer">
                    <div className="rating">{ movie.imdbRating}</div>
                    {
                      isFav ? <button className="unfavourite-btn" onClick={this.handleUnFavClick}>UnFavourite</button>
                      : <button className="favourite-btn" onClick={this.handleFavClick}>Favourite</button>
                    }
                        
                  </div>
              </div>
            </div>
          );
    }
}

export default MovieCard;
