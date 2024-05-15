import React from 'react';
import Movie from '../Movie/Movie.js';
import './MovieList.css';

function MovieList({ movies }) {
    return (
        <div className="movie-list-container">
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default MovieList;