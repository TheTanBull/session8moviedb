import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
      movies: [],
      searchInput: "",
    }

    // hey, go grab all of the stuff from that webpage
    // axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262")
    //   .then((response) => {
    //     // handle success
    //     this.setState({movies: response.data.results}); // this is our movies
    //   })
    // console.log('right after that axios get stuff!')
    // then put it into this.state.movies
  }

  

  movieSearch(search){
    fetch('https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262&query=' + search)
        .then((response) => {return response.json()})
        .then((movies) => {this.setState({movies: movies.results}) })
  }


  render() {
    console.log('Render function!', this.state.movies);
    return (
      <div className="App">
          <input type="text" value={this.state.searchInput} onChange={(e) => this.setState({searchInput: e.target.value })}></input>
          <button onClick={() => this.movieSearch(this.state.searchInput)}>Search</button> 
          {this.state.movies.map((movie) => {
          return (
          <div>
            <h1>{movie.title}</h1>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="Movie Poster" />
            <p>{movie.overview}</p>
          </div>
          )
        })}
      </div>
    );
  
  }
}

export default App;
