import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Checkout";
    document.body.style.background = "#2b2f32";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/thankyou');
  };
  return (
    <div>
      <h1 className="text-center text-warning my-5">Checkout</h1>
      <div className="w-75 d-block mx-auto text-white">
        <Form style={{ border: "1px", color: "#FFCA2C" }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Division</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Dhaka</option>
                <option>Khulna</option>
                <option>Chittagong</option>
                <option>Rajshahi</option>
                <option>Mymensingh</option>
                <option>Barisal</option>
                <option>Sylhet</option>
                <option>Rangpur</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Button className="w-25 d-block mx-auto my-5" variant="warning" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
