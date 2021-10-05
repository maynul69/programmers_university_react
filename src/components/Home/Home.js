import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("./database.JSON")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    const serviceShort=services.slice(0,6);
    
    
    return (
      <div>
        <div classname="py-4">
          <NavLink
            className="text-decoration-none font-weight-bold px-2 "
            style={{ fontSize: "50px", color: "blueviolet" }}
            to="/home"
          >
            Apply Now 
          </NavLink>


        </div>
        <div className="row mx-auto mt-5">
          {serviceShort.map((service) => (
            <div className="col-md-4 mb-4">
              <Card className="h-400" style={{ minHeight: "400px" }}>
                <Card.Img
                  variant="top"
                  src={service.img}
                  className="img-fluid"
                  style={{ height: "50%", margin: "auto" }}
                />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                    Price: <b>{service.cost}</b>
                    <br />
                    Duration: {service.duration}
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{
                      color: "white",
                      backgroundColor: "blueviolet",
                      border: "none",
                    }}
                  >
                    Enroll
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Home;