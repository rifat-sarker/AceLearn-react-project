import { useEffect, useState } from "react";
import Service from "../Service/Service";
import Navbar from "../shared/Navbar/Navbar";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
    <Navbar></Navbar>
      <div className="text-center mt-12">
        <h1 className="text-6xl font-bold my-4">Our Services</h1>
        <p>
          We provide best solutions for a Coaching Services. If you need any
          help in cleaning <br /> or maintenance contact us today to get your
          body clean.
        </p>
        <div className="mt-8 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
