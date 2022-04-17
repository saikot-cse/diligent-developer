import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import pageNotFound from "../../images/pageNotFound.jpg";
const NotFound = () => {
  useEffect(() => {
    document.title = "404 Page Not Found";
    document.body.style.background = "#2b2f32";
  }, []);
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };
  return (
    <div>
      <img className="mx-auto d-block mt-3 rounded" src={pageNotFound} alt="" />
      <Button onClick={navigateToHome} className="font-weight-bolder w-25 mx-auto d-block my-3" variant="warning">
        Go back to Home
      </Button>
    </div>
  );
};

export default NotFound;
