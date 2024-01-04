import React from 'react'; 

const MovieList = (props) => {
// mov is an object of MovieList
    return (
        <>
            {props.mov.map( (movie, index) => <div>
                <img src = {movie.Poster} alt="Poster"></img>
            </div>)}
        </>
    )
}

export default MovieList; 