import React from 'react'
import Movie from './Movie'
import MovieDetails from './MovieDetails'

class Movies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movieDetailsBool: false,
            movies: [],
            searchInput: "",
        }
    }

    movieSearch(search){
        fetch('https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=b6fbc7f3f313bd395902af464ef47262&query=' + search)
            .then((response) => {return response.json()})
            .then((movies) => {this.setState({movies: movies.results}) })
      }


      onMovieDetails = () => {
        this.setState({movieDetailsBool: !this.state.movieDetailsBool})
    }

      returnMovies(){
        return (
            <div>
                <input type="text" value={this.state.searchInput} onChange={(e) => this.setState({searchInput: e.target.value })}></input>
                <button onClick={() => this.movieSearch(this.state.searchInput)}>Search</button> 
                {this.state.movies.map((movie) => {
                return (
                    <Movie onClick={this.onMovieDetails} movie={movie} />
                )
                })}
            </div>
        )
      }

      returnMovieDetails(){
        console.log("In returnMovieDetails")
        
        return <MovieDetails onClick={this.onMovieDetails} />
      }

      


      render() {
        
        if(!this.state.movieDetailsBool){
            return this.returnMovies()
        } else {
            return this.returnMovieDetails()
        }

        
      }
}


export default Movies