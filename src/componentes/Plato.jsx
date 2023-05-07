import React from "react";
import Card from 'react-bootstrap/Card';

const PlatoCard = ({plato}) => {
  return (
    <Card>
      <Card.Img variant="top" src={plato.imagen} />
      <Card.Body>
        <Card.Title>{plato.plato}</Card.Title>
        <Card.Text>{plato.descripcion}</Card.Text>
        <Card.Title>${plato.precio}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default PlatoCard;
