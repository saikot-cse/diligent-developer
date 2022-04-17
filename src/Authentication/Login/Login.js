import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
    document.body.style.background = "#2b2f32";
  }, []);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleGithubSignIn = () => {
    signInWithGithub();
  };
  if (googleUser || githubUser) {
    navigate(from);
  }
  
  if(user){
    navigate(from);
  }
  const handleEmailblur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordblur = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin= ()=>{
    signInWithEmailAndPassword(email,password);
  }
  return (
    <div>
      <h1 className="text-center text-warning my-5">Login</h1>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email" style={{ border: "1px", color: "#FFCA2C" }} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control onBlur={handlePasswordblur} type="password" placeholder="Password" style={{ border: "1px", color: "#FFCA2C" }} required />
        </Form.Group>
        <p className="text-white">
          Don't have any account?
          <Link className="text-warning ms-2 text-decoration-none" to="/register">
            Please Register
          </Link>
        </p>
        <Button onClick={handleLogin} className="font-weight-bolder w-25 mx-auto d-block" variant="warning">
          Login
        </Button>
        <div className="d-flex align-items-center justify-content-center my-3">
          <div style={{ height: "2px", backgroundColor: "#ffffff" }} className="w-25"></div>
          <p className="text-warning mx-2 mt-2">or</p>
          <div style={{ height: "2px", backgroundColor: "#ffffff" }} className="w-25"></div>
        </div>
        <div className="d-flex justify-content-between">
          <Button onClick={handleGoogleSignIn} className="font-weight-bolder w-50 mx-auto d-block me-5" variant="info">
            Sign In with Google
          </Button>
          <Button onClick={handleGithubSignIn} className="font-weight-bolder w-50 mx-auto d-block" variant="dark">
            Sign In with Github
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
