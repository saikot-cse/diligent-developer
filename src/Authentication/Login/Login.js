import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Login = () => {
  useEffect(() => {
    document.title = "Login | Diligent Developer";
    document.body.style.background = "#2b2f32";
  }, []);
  return (
    <div>
      <h1 className="text-center text-warning my-5">Login</h1>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{border: '1px',color: "#FFCA2C"}} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{border: '1px',color: "#FFCA2C"}} required/>
        </Form.Group>
        <p className="text-white">Don't have any account?<Link className="text-warning ms-2 text-decoration-none" to= '/register'>Please Register</Link></p>
        <Button className="font-weight-bolder w-25 mx-auto d-block" variant="warning">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
