import React from 'react';
import quote from '../../Images/quote.png'
import testimonial1 from '../../Images/Ellipse 1.png'
import testimonial2 from '../../Images/Ellipse 2.png'
import testimonial3 from '../../Images/Ellipse 3.png'

const Testimonial = () => {
    const testimonialData = [
        {
            name:'Winson Herry',
            city:'California',
            image:testimonial1
        },
        {
            name:'Nale Patel',
            city:'New York',
            image:testimonial2
        },
        {
            name:'De Yoirck',
            city:'Alabama',
            image:testimonial3
        }

    ]
    return (
        <div className="container mb-5">
            <div className="row d-flex justify-content-between">
                <div className="col-md-5">
                    <h5 className='textColor1 font-weight-bold'>TESTIMONIAL</h5>
                    <h1 className='textColor2 font-weight-bold'>What's Our Patients <br/> Say</h1>
                </div>
                <div className="col-md-4">
                    <img className='d-block ml-auto' height='150' src={quote} alt=""/>
                </div>
            </div>
            <div className="row my-5">
                {testimonialData.map(data=>
                    <div key={data.name} className="col-md-4">
                        <div className="card border-0 shadow px-2">
                            <div className="card-body">
                                <p className='text-secondary text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem exercitationem sapiente incidunt temporibus. Veniam, possimus voluptate est voluptates doloremque dignissimos?</p>
                                <div className="card-footer p-0 border-0 bg-white mt-5  d-flex">
                                    <div className="col-md-3">
                                        <img height='40' src={data.image} alt=""/>
                                    </div>
                                    <div className="col-md-9">
                                        <p className='textColor1 font-weight-bold m-0'>{data.name}</p>                                   
                                        <p className='textColor2 m-0'>{data.city}</p>                                   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Testimonial;