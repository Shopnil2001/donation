import React from 'react';

const Review = () => {
    return (
        <div className='lg:flex mt-5 justify-around'>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img  src={'https://i.ibb.co/h1SkYqB/member1.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Matt</h2>
                    <p>I had a great time in the music festival</p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"checked />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img  src={'https://i.ibb.co/12ZKQXS/member2.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jenny</h2>
                    <p>The Pitha Utshob was great. I am coming back next year </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img  src={'https://i.ibb.co/vd679Xr/member3.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Joshim</h2>
                    <p> There was no Biriyani at the Eid festival.I am never coming back </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"checked  />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"/>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img  src={'https://i.ibb.co/YcJqKkk/member4.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jorina</h2>
                    <p> I went to Boishakhi Mela and my phone got stolen . Their security is very bad </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"/>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;