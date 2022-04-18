import { useEffect } from "react";
import useService from "../../Hooks/UseService";
import Service from "./Service/Service";
import './Services.css'
const Services = () => {
  useEffect(() => {
    document.title = "Services";
    document.body.style.background = "#2b2f32";
  }, []);
  const [services] = useService([]);

  return (
    <div id="services">
      <h1 className="text-center my-5 text-warning">Services I Provide</h1>
      <div className="service-container container mb-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
