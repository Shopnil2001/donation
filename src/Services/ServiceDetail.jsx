
import { useLoaderData, useParams } from 'react-router-dom';
import { savedData } from '../Utility/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ServiceDetail = () => {
    const AllServices = useLoaderData()
    console.log(AllServices);
    const { id } = useParams()
    const service = AllServices.find(service => service.id == id)
    const handleEvent = ()=>{
        savedData(parseInt(id));
        toast('Thank you for joining. see details in MyEvents')

    }
    console.log(service);
    return (
        <>
        
        <div className='w-3/4  mx-auto mt-6'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{service.heading}</h1>
                        <p className="mb-5">{service.details}</p>
                        <button onClick={handleEvent} className="btn btn-primary">join event</button>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer></ToastContainer>
        </>
    );
};

export default ServiceDetail;