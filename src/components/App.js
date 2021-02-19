import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFav } from '../actions';


class App extends React.Component {
  componentDidMount () {
    const { store }= this.props;
    store.subscribe(() => {
      console.log('Updating Data');
      this.forceUpdate();
    })
    //API CALL
      store.dispatch(addMovies(data));

    console.log('STATE', this.props.store.getState());
  }


  isMovieFav = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if(index !== -1) {
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFav(val))
  }

  render() {
    const { movies } = this.props.store.getState();
  const { list, favourites, showFav } = movies;
  console.log('RENDER', this.props.store.getState());

  const displayMovies = showFav ? favourites : list;
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFav ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}> Movies </div>
          <div className={`tab ${showFav ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}> Favourites </div>
        </div>

        <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard movie={movie}
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch}
            isFav = {this.isMovieFav(movie)} />
          ))}
        </div>

        {displayMovies.length === 0 ? <div className="no-movies"> No Movies </div> : null}

      </div>
    </div>
  );
  }
}

export default App;
