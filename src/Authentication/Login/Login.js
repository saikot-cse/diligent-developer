import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import Loading from "../../Pages/Loading/Loading";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
    document.body.style.background = "#2b2f32";
  }, []);
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithEmailAndPassword, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
  useEffect(() => {
    if (user) {
      navigate(from,{replace:true});
    }
  }, [user]);

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
  const handleLogin = () => {
    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const error = hookError || googleError || githubError || resetError;
    if (error) {
      console.log(error);
      switch (error?.code) {
        case "auth/user-not-found":
          toast("Please provide a valid email", { theme: "dark" });
          break;
        case "auth/invalid-email":
          toast("Please provide a valid email and password", { theme: "dark" });
          break;

        case "auth/wrong-password":
          toast("Wrong password.");
          break;
        case "auth/popup-closed-by-user":
          toast("having issue? Register with Email", { theme: "dark" });
          break;
        default:
          toast("something went wrong", { theme: "dark" });
      }
    }
  }, [hookError, googleError, githubError]);
  if (loading || googleLoading || githubLoading || sending) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-center text-warning my-5">Login</h1>
      <Form className="w-50 mx-auto my-5">
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
        <ToastContainer />
        <p className="text-white">
          Don't have any account?
          <Link className="text-warning ms-2 text-decoration-none" to="/register">
            Please Register
          </Link>
        </p>
        <Button
          onClick={async () => {
            await sendPasswordResetEmail(email);
            toast("Sent email");
          }}
          variant="warning"
          className="ms-2"
        >
          Reset Password
        </Button>

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
