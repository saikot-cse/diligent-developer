import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    document.title = "Register";
    document.body.style.background = "#2b2f32";
  }, []);
  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };
  const handleGithubSignUp = () => {
    signInWithGithub();
  };
  if (googleUser || githubUser) {
    navigate(from);
  }
  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleEmailblur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setEmail(e.target.value);
      setEmailError("");
    } else {
      setEmailError("Invalid Email");
    }
  };
  const handlePasswordblur = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setPassword(e.target.value);
      setPasswordError("");
    } else {
      setPasswordError("Must content eight characters, at least one letter and one number");
    }
  };
  const handleConfirmPasswordblur = (e) => {
    if (e.target.value === password) {
      setConfirmPassword(e.target.value);
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("Password Dosen't Match");
    }
  };
  const handleRegister = () => {
    createUserWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate("/login");
    }
  }, [user]);
  useEffect(() => {
    const error = hookError || googleError || githubError;
    if (error) {
      switch (error?.code) {
        case "auth/email-already-in-use":
          toast("Email already used. Please try another email");
          break;

        case "auth/wrong-password":
          toast("Wrong password.");
          break;
        case "auth/popup-closed-by-user":
          toast("having issue? Register with Email");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError, googleError, githubError]);

  return (
    <div>
      <h1 className="text-center text-warning my-4">Register</h1>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label className="text-white">Full Name</Form.Label>
          <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your name" style={{ border: "1px", color: "#FFCA2C" }} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="text-white">Email address</Form.Label>
          <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email" style={{ border: "1px", color: "#FFCA2C" }} required />
        </Form.Group>
        <p className="text-danger">{emailError}</p>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="text-white">Password</Form.Label>
          <Form.Control onBlur={handlePasswordblur} type="password" placeholder="Password" style={{ border: "1px", color: "#FFCA2C" }} required />
        </Form.Group>
        <p className="text-danger">{passwordError}</p>

        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
          <Form.Label className="text-white">Confirm Password</Form.Label>
          <Form.Control onBlur={handleConfirmPasswordblur} type="password" placeholder="Confirm Password" style={{ border: "1px", color: "#FFCA2C" }} required />
        </Form.Group>
        <p className="text-danger">{confirmPasswordError}</p>
        <ToastContainer />
        <p className="text-white">
          Already have an account?
          <Link className="text-warning ms-2 text-decoration-none" to="/login">
            Please Login
          </Link>
        </p>
        <Button onClick={handleRegister} className="font-weight-bolder w-25 mx-auto d-block" variant="warning">
          Register
        </Button>
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
