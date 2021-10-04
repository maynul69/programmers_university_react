import React, { useEffect, useState } from 'react';
import Signleservice from '../Singleservice/Signleservice';



const Services = () => {
    const [services,setServices]=useState([]);
    
    useEffect(() => {
      fetch("./database.JSON")
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    

    

    return (
      <div className="row mx-auto">
        {services.map((service) => (
          <Signleservice service={service}></Signleservice>
        ))}
      </div>
    );
};

export default Services;