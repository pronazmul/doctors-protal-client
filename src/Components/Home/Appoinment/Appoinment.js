import React from 'react'
import doctor from '../../Images/doctor.png'

const Appoinment = () => {
    return (
        <div className="container-fluid appoinment-bg">
            <div className="row">
                <div className="col-md-6">
                    <img className='appoinment-doctor' src={doctor} alt=""/>
                </div>
                <div className="col-md-6 py-5">
                    <h5 className='textColor1 font-weight-bold'>APPOINMENT</h5>
                    <h1 className='text-light font-weight-bold my-3'>Make An Appoinment <br/> Today</h1>
                    <p className='text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias laboriosam minus earum unde eligendi.</p>
                    <button className='btn bgGradient mt-2'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;