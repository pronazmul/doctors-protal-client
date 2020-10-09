import React from 'react'
import flouride from '../../Images/dental.png'
import cavity from '../../Images/cavity.png'
import whitening from '../../Images/white.png'

const Service = () => {
    const serviceInfo = [
        {
            logo:flouride,
            title:'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem perspiciatis veritatis ipsum molestiae recusandae?'
        },
        {
            logo:cavity,
            title:'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem perspiciatis veritatis ipsum molestiae recusandae?'
        },
        {
            logo:whitening,
            title:'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem perspiciatis veritatis ipsum molestiae recusandae?'
        }
    ]
    return (
        <div className="container text-center">
        <h5 className='textColor1 font-weight-bolder'>OUR SERVICES</h5>
        <h1 className='textColor2 font-weight-bolder'>Services We Provide</h1>
            <div className="row">
                {serviceInfo.map(data=>
                        <div key={data.title} className="col-md-4">
                            <div className="card border-0 mt-3">
                                <div className="card-body">
                                    <img height='60' src={data.logo} alt=""/>
                                    <h4 className='textColor2 font-weight-bold my-4'>{data.title}</h4>
                                    <p className='text-secondary'>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Service;