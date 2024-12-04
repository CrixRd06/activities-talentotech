import React from "react";
import { Card, Button } from "react-bootstrap";

export const PokemonCard = ({ name, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={imageUrl} style={{width: "100px", height: "100px"}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary">Detalles</Button>
            </Card.Body>
        </Card>
    )
}