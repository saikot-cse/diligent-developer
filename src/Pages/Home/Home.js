import React, { useEffect } from "react";
import useService from "../../Hooks/UseService";
import Banner from "../Banner/Banner";
import Service from "../Services/Service/Service";
import '../Services/Services.css'
const Home = () => {
  const [services] = useService([]);
  useEffect(() => {
    document.title = "Home | Diligent Developer";
    document.body.style.background = "#2b2f32";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="text-warning my-5 text-center">Top 3 Services</h1>
        <div className="service-container container mb-5">
          {
            services.slice(3,).map(service=><Service key = {service.id} service= {service}></Service>)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
