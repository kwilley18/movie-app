import React from 'react'; 

const movieList = (props) => {

    return (
        <>
            {props.movies.map( (movie, index) => <div>
                <img src = {movie.Poster}></img>
            </div>)}
        </>
    )
}