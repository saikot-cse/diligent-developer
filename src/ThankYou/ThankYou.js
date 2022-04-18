import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import thankYou from "../images/thank-you.png";
const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank You";
    document.body.style.background = "#2b2f32";
  }, []);
  const navigate = useNavigate();
  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div>
      <img className="mx-auto d-block mt-3 rounded img-fluid" src={thankYou} alt="" />
      <Button variant="warning" className="font-weight-bolder w-25 mx-auto d-block my-3" onClick={navigateToHome}>
        Back To Home
      </Button>
    </div>
  );
};

export default ThankYou;
