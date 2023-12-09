import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    return (
        <div className="">
             <div data-aos="fade-down-right"  data-aos-duration="1500" key={service.id} className=" card lg:card-side bg-base-100 shadow-xl mt-5">
                <div className="w-96 max-w-fit ">
                <img className="" src={service.image} alt="Album"/>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{service.heading}</h2>
                  <p>{service.description}</p>
                  <div className="card-actions justify-end">
                   <Link to={`/Service/${service.id}`} className="btn btn-primary">See Details</Link>
                  </div>
                </div>
              </div>
        </div>
    );
};

export default ServiceCard;