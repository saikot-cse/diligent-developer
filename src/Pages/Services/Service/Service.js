import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { name, price, image, desc } = service;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="font-weight-bolder">{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <div className=" d-flex justify-content-between">
            <Button className="font-weight-bolder" variant="warning">Price: ${price}</Button>
            <Button className="font-weight-bolder" variant="warning">Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
