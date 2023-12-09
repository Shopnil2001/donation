
import { useLoaderData } from 'react-router-dom';
import { getStoredData } from '../Utility/localStorage';
import { useEffect, useState } from 'react';


const MyEvents = () => {
    const AllEvents= useLoaderData();
    const [newEvent, setNewEvent]= useState([]);
    useEffect(()=>{
        const storedIds = getStoredData()
        if(AllEvents.length>0)
        {
            const Event = AllEvents.filter(Event => storedIds.includes(parseInt(Event.id)));
            setNewEvent(Event)
        }
    },[])
    console.log(newEvent);
    return (
        <div className='lg:mx-20 md:mx-10'>
            {
                newEvent.map(event =><div data-aos="fade-up"
                data-aos-duration="3000" key={event.id} className=" card lg:card-side bg-base-100 shadow-xl mt-5">
                <div className="w-96 ">
                <img className="" src={event.image} alt="Album"/>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{event.heading}</h2>
                  <p>{event.description}</p>
                  
                </div>
              </div>)
            }
            
        </div>
    );
};

export default MyEvents;