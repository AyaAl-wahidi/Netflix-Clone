import React from 'react';
import Movie from '../Movie/Movie.js';
import './MovieList.css'; // Import the CSS file

function MovieList({ movies }) {
    return (
        <div className="movie-list-container"> {/* Add class name here */}
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;
