import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const businessData = [
        {
            icon:faClock,
            title: 'Opening Hours',
            description: 'Lorem ipsum dolor sit amet.',
            color: 'bgGradient'
        },
        {
            icon:faMapMarkedAlt,
            title: 'Visit Our Location',
            description: 'Lorem ipsum dolor sit amet.',
            color: 'bgSolid'
        },
        {
            icon:faPhone,
            title: 'Contract Us',
            description: '+880 1746 243302',
            color: 'bgGradient'
        }
    ]
    return (
        <div className="container mt-3 ">
            <div className="row">
                {
                    businessData.map(data=>
                        <div className="col-md-4">
                            <div className={`card shadow text-light ${data.color}`}>
                                <div className="card-body d-flex flex-row align-items-center px-3">
                                    <div className="col-md-3">
                                        <FontAwesomeIcon className='display-4' icon={data.icon}></FontAwesomeIcon>
                                    </div>
                                    <div className="col-md-9">
                                        <h4>{data.title}</h4>
                                        <small>{data.description}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BusinessInfo;