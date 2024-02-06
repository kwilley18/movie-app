import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import AddFavorites from './AddFavorites'

const App = () => {
  const[movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const num = 4; 

  const getMovieRequest = async (searchValue) => {
    //setSearchValue
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f4fb61e0`;
    const response = await fetch(url);
    const jsonResponse = await response.json(); // converts http to json

    console.log(jsonResponse);

    if(jsonResponse.Search){
        setMovies(jsonResponse.Search);
    }
}

// side effects, feteching data
useEffect(()=>{
    getMovieRequest(searchValue);
},[searchValue]); 

   /* <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
         <MovieListHeading heading =  'Movies' />
         <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue}/>
        </div>   */

  // {Title, Year, imdbID, Type, Poster}
  return (
      
        <div className="container-fluid movieapp">

            <div className = "row d-flex align-items-center ">
                <MovieListHeading heading = "Movies" />
                <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
            </div>

            <div className="row" >
                    <MovieList mov = {movies}/>   
            </div>
            <div className="row">
                    <MovieListHeading heading = "Favorites" />
                    <MovieList mov = {favorites}/>   
            </div>            
        </div> 

  );
  





  
}

export default App;


