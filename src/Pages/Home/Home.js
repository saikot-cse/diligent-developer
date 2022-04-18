import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useService from "../../Hooks/UseService";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Service from "../Services/Service/Service";
import "../Services/Services.css";
const Home = () => {
  const [services] = useService([]);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Homepage";
    document.body.style.background = "#2b2f32";
  }, []);
  const navigateToService = () => {
    navigate("/services");
  };
  return (
    <div id="home">
      <Banner></Banner>
      <div className="d-flex flex-column container">
        <h1 className="text-warning my-5 text-center">Top 3 Services</h1>
        <div className="service-container container mb-5">
          {services.slice(3).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <Button variant="warning" className="w-25 mx-auto mb-5" onClick={navigateToService}>
          Show All Services
        </Button>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
