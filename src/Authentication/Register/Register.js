import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const Register = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Register | Diligent Developer";
    document.body.style.background = "#2b2f32";
  }, []);
  const handleGoogleSignUp = ()=>{
    signInWithGoogle();
  }
  const handleGithubSignUp = ()=>{
    signInWithGithub();
  }
  if(googleUser || githubUser){
    navigate('/home');
  }
  
  return (
    <div>
      <h1 className="text-center text-warning my-4">Register</h1>
      <Form className="w-50 mx-auto" >
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label className="text-white">Full Name</Form.Label>
          <Form.Control type="text" placeholder="Your name"  style={{border: '1px',color: "#FFCA2C"}} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{border: '1px',color: "#FFCA2C"}} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{border: '1px',color: "#FFCA2C"}} required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Label className="text-white">Confirm Password</Form.Label>
          <Form.Control  type="password" placeholder="Confirm Password" style={{border: '1px',color: "#FFCA2C"}} required/>
        </Form.Group>
        <p className="text-white">Already have an account?<Link className="text-warning ms-2 text-decoration-none" to= '/login'>Please Login</Link></p>
        <Button className="font-weight-bolder w-25 mx-auto d-block" variant="warning">Register</Button>
        <div className="d-flex align-items-center justify-content-center my-3">
          <div style={{ height: "2px", backgroundColor: "#ffffff" }} className="w-25"></div>
          <p className="text-warning mx-2 mt-2">or</p>
          <div style={{ height: "2px", backgroundColor: "#ffffff" }} className="w-25"></div>
        </div>
        <div className="d-flex justify-content-between mb-5">
          <Button onClick={handleGoogleSignUp} className="font-weight-bolder w-50 mx-auto d-block me-5" variant="info">
            Sign Up with Google
          </Button>
          <Button onClick={handleGithubSignUp} className="font-weight-bolder w-50 mx-auto d-block" variant="dark">
            Sign Up with Github
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;