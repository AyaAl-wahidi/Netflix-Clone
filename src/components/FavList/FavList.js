import React, { useEffect, useState } from "react";
import axios from "axios";
import "../FavList/FavList.css";

function FavList() {
  const [favorites, setFavorites] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios
      .get("https://movies-library-server-9vsh.onrender.com/getMovies")
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the favorite movies!",
          error
        );
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://movies-library-server-9vsh.onrender.com/deleteMovieById/${id}`)
      .then(() => {
        setFavorites(favorites.filter((movie) => movie.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the movie!", error);
      });
  };

  const handleUpdate = (id) => {
    axios
      .put(`https://movies-library-server-9vsh.onrender.com/editMovieById/${id}`, { comment: newComment })
      .then((response) => {
        setFavorites(
          favorites.map((movie) =>
            movie.id === id
              ? { ...movie, comment: response.data.comment }
              : movie
          )
        );
        setNewComment('');
      })
      .catch((error) => {
        console.error("There was an error updating the comment!", error);
      });
  };

  return (
    <div className="fav-list">
      <h1>Favorite Movies</h1>
      {favorites.map((movie) => (
        <div key={movie.id} className="fav-movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.comment}</p>
          <textarea
            className="form-control mt-3"
            rows="3"
            placeholder="Update the comment!"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button onClick={() => handleDelete(movie.id)}>Delete</button>
          <button onClick={() => handleUpdate(movie.id)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default FavList;
