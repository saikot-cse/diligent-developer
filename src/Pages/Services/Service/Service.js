import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Service = ({ service }) => {
  const { name, price, image, desc } = service;
  const navigate = useNavigate();
  const navigateToCheckout = ()=>{
    navigate('/checkout');
  }
  const navigateToServiceDetails = ()=>{
    navigate('/serviceDetails');
  }

  return (
    <div id="services">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="font-weight-bolder">{name}</Card.Title>
          <Card.Text className="font-weight-bolder">Price: ${price}</Card.Text>
          <Card.Text>{desc}</Card.Text>
          <div className=" d-flex justify-content-between">
            <Button onClick={navigateToServiceDetails} className="font-weight-bolder" variant="info">Show Details</Button>
            <Button onClick={navigateToCheckout} className="font-weight-bolder" variant="warning">Buy Now</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
