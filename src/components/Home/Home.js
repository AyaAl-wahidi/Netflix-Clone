import React, {useState, useEffect} from "react";
import axios from 'axios';
import MovieList from '../MovieList/MovieList.js'

function Home() {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://movies-library-server-9vsh.onrender.com/trending")
        .then((response) => {
          setMovies(response.data);
        })
        .catch((error) => {
          console.error("Error fetching trending movies:", error);
        });
    }, []);
  
    return (
      <div>
        <MovieList movies={movies} />
      </div>
    );
  }
  
  export default Home;