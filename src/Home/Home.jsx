import { useEffect, useState } from "react";
import Services from "../Services/Services";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Review from "../Extra/Review";
AOS.init();


const Home = () => {
    const [slideData, setSlideData] = useState([])
    useEffect(() => {
        fetch('/Events.json')
            .then(res => res.json())
            .then(data => setSlideData(data))
    }, [])
    console.log(slideData);
    return (

        <>

            <div className="">
                <div className="bg-[url('https://i.ibb.co/QXD09FN/pablo-heimplatz-ZODc-Bk-Eohk8-unsplash.jpg')] bg-cover bg-center w-3/4 h-96 mx-auto text-center py-10">
                    <div data-aos="zoom-in"
                    data-aos-duration="3000">
                        <h1 className="text-3xl font-bold text-white ">
                            Enjoy The Best Services
                        </h1>
                        <ul className="text-xl text-rose-200 font-semibold mt-5 ">
                            <li>We Manage Events like pro</li>
                            <li>Participate in Events You like </li>
                            <li>Enjoy Your Time   </li>


                        </ul>

                    </div>


                </div>
            </div>
            <div>
                <h1 className="text-center font-bold text-3xl mt-10" >Our services</h1>
                <hr className="w-60 mx-auto" />


                <Services className="mx-auto "></Services>
            </div>


            <div>
                <h1 className=" text-center font-bold text-3xl mt-10">Customer Review</h1>
                <hr className="w-60 mx-auto" />
                <Review>

                </Review>
            </div>





            <div>
                <div className="mx-20">
                    <h1 className="text-2xl font-bold mt-9">Services related to ours(Slide to see)</h1>
                    <div className="carousel carousel-center w-full  ">
                        {
                            slideData.map(slide => <div key={slide.id} className="carousel-item relative text-center ">
                                <img className="w-full opacity-95 " src={slide.image} alt="" />
                                <h1 className="text-4xl absolute font-bold text-red-400 mx-32 my-40">{slide.text}</h1>
                            </div>



                            )
                        }
                    </div>
                </div>
            </div>
            <div>

                <footer className="footer footer-center p-10 bg-gray-500 mt-6 text-base-content rounded">
                    <nav className="grid grid-flow-col gap-4">
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </nav>
                    <aside>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </aside>
                </footer>
            </div>
        </>
    );
};

export default Home;