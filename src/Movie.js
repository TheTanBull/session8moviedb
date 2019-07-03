import React from 'react'

const Movie = (props) => {

    return (
        <div>
            <h1>{props.movie.title}</h1>
            <img src={'https://image.tmdb.org/t/p/w500' + props.movie.poster_path} alt="Movie Poster" />
            <p>{props.movie.overview}</p>
        </div>
    )
}

export default Movie