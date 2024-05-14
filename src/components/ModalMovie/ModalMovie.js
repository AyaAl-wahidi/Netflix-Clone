import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalMovie({ movie, setShowModal, handleModalClose }) {
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const url = "https://movies-library-server-9vsh.onrender.com";
    const handleAddToDatabase = () => {
        if (!comment) {
            setError('Comment is required');
            return;
        }

        setLoading(true);

        axios.post(`${url}/addMovie`, {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comment: comment
        })
        .then(() => {
            setLoading(false);
            setShowModal(false);
            setComment('');
        })
        .catch(error => {
            setLoading(false);
            console.error('Error adding movie to database:', error);
        });
    };

    return (

        <Modal show={true} onHide={handleModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add to Favorites MovieList</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{movie.title}</h5>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ maxWidth: '100%' }} />
                <textarea
                    className="form-control mt-3"
                    rows="3"
                    placeholder="Add your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                {error && <p className="text-danger">{error}</p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>Close</Button>
                <Button variant="primary" onClick={handleAddToDatabase} disabled={loading}>{loading ? 'Adding...' : 'Save changes'}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMovie;
