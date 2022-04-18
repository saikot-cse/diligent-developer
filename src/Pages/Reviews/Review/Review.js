import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Review = (props) => {
  const {name, img, review,ratings} = props.review;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "200px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title className="font-weight-bolder">{name}</Card.Title>
          <Card.Text>{review}</Card.Text>
          <Button className="font-weight-bolder d-block w-100" variant="warning">Ratings: {ratings}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;