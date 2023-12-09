

import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";


const Services = () => {
   
    const [Services, setServices] = useState([])
    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="">
           <div className=" lg:mx-60 md:mx-20 mx-8  gap-2 grid-cols-2 ">
           {
                Services.map(service=> <ServiceCard key={service.id}
                  service={service}
                ></ServiceCard>)
            }
           </div>
        </div>
    );
};

export default Services;