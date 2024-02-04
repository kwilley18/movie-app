import './App.css';
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';
import 'bootstrap/dist/css/bootstrap.min.css'
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

useEffect(()=>{
    getMovieRequest(searchValue);
},[searchValue]); 
  /*const[movies, setMovies] = useState([
    {
      "Title": "Spy Kids",
      "Year": "2001",
      "imdbID": "tt0227538",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2JhODU1NmQtNjllYS00ZmQwLWEwZjYtMTE5NjA1M2YyMzdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
      "Title": "Spy Kids 2: Island of Lost Dreams",
      "Year": "2002",
      "imdbID": "tt0287717",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWM2N2JjYzYtYWIyNS00NDc3LWFkNDctMmYwOWQyZTcxYjZhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
      "Title": "Spy Kids 3: Game Over",
      "Year": "2003",
      "imdbID": "tt0338459",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTI4MTQyNTUzMF5BMl5BanBnXkFtZTcwNzE2MDAwMQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Spy Kids 4: All the Time in the World",
      "Year": "2011",
      "imdbID": "tt1517489",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE1NTEwNzM5MV5BMl5BanBnXkFtZTcwNTA5Njc0NQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Spy Kids: Armageddon",
      "Year": "2023",
      "imdbID": "tt13978520",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDg2MWFhYTYtZWYxYy00MjlkLWJlMDQtZGFmZmEwOTY5NjZlXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_SX300.jpg"
  },
  {
      "Title": "Spy Kids: Mission Critical",
      "Year": "2018",
      "imdbID": "tt6714408",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjU2ZGM3MjYtYWFhOS00NmI1LTliZDUtZjljMzFlNTU1OTU5XkEyXkFqcGdeQXVyNTY5MzM1MTg@._V1_SX300.jpg"
  },
  {
      "Title": "Spy Kids: Passing the Torch",
      "Year": "2011",
      "imdbID": "tt3097814",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGJjYjAxYzctMDAyNy00YjEzLWIzNzItYzUyMjgwMDAxMDlkXkEyXkFqcGdeQXVyNjY1NTE4OTY@._V1_SX300.jpg"
  },
  {
      "Title": "Spy Kids Learning Adventures: Mission - The Man in the Moon",
      "Year": "2004",
      "imdbID": "tt0478735",
      "Type": "game",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYjk2ODQ3NWEtNTZhZC00YjhiLWE5NGUtODM0MjQyZDcxMTZhXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
  },
  {
      "Title": "Adventures in Acting with the Kids of 'The Spy Next Door'",
      "Year": "2010",
      "imdbID": "tt1690948",
      "Type": "movie",
      "Poster": "N/A"
  },
  {
      "Title": "Untitled Spy Kids Film",
      "Year": "2022",
      "imdbID": "tt13935326",
      "Type": "movie",
      "Poster": "N/A"
  }
  ]); 
    <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
         <MovieListHeading heading =  'Movies' />
         <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue}/>
        </div>   */

  // {Title, Year, imdbID, Type, Poster}
  return (
      
    
        <div className="container-fluid movieapp">

            <div className = "row d-flex align items center mt-4 mb-4">
                <MovieListHeading heading = "Movies" />
                <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
            </div>

            <div className="row">
                    <MovieList mov = {movies}/>   
            </div>
        </div> 

  );
  





  
}

export default App;


