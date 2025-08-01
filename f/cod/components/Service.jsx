import { useEffect, useState } from "react";
import "../Style/Service.css";

const Service = () => {
  const [services, setServices] = useState([]);
  console.log(services)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/service/getservice");
        const json = await res.json();
        setServices(json.data);
      } catch (err) {
        console.error("Error fetching services:", err);
      }
    };
    

    fetchData();
  }, []);

  return (
    <div className="cardflex">
      {services.map((service, index) => (
        <div className="course-card" key={index}>
          <img
            src={`http://localhost:3000/${service.image}`}
            alt="Course"
            className="course-image"
          />
          <div className="course-details">
            <h2 className="course-name">{service.name}</h2>
            <p className="course-description">{service.description}</p>
            <p className="course-price">💰 {service.price}</p>
            <p className="course-date"></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
