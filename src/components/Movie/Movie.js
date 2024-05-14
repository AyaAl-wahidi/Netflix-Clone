import React, { useState } from 'react';
import ModalMovie from '../ModalMovie/ModalMovie';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Movie = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);

    const handleAddToFavorites = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Row xs={1} md={2} className="g-4">
                <Col key={movie.id}>
                    <Card style={{ width: '20rem'}}>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        <Card.Body>
                            <Card.Text>
                                {movie.overview}
                            </Card.Text>
                        </Card.Body>
                        <Button onClick={handleAddToFavorites}>Add to Favorites</Button>
                    </Card>
                </Col>
            </Row>
            {showModal && <ModalMovie movie={movie} setShowModal={setShowModal} handleModalClose={handleModalClose} />}
        </>
    );
};

export default Movie;
