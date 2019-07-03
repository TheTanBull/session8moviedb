import React from 'react';
import './App.css';
import axios from 'axios';
import Movies from './Movies'

class App extends React.Component {
  constructor(props)
  {
    super(props)

    this.state = {
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

  




  render() {
    console.log('Render function!', this.state.movies);
    return (
      <div className="App">
         <Movies />
      </div>
    );
  
  }
}

export default App;
