import React from 'react'
import { Link } from 'react-router-dom';
import bannar from '../../Images/bannar.png'

const Bannar = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div style={{height:'430px'}} className="row d-flex align-items-center">
                    <div className="col-md-4 offset-md-1">
                        <h1 className='font-weight-bolder textColor2'>Your New Smile <br/> Starts Here</h1>
                        <p className='lead'>Vero officia atque ipsa, quo et architecto omnis veniam quos magnam id! Lorem ipsum dolor sit amet.</p>
                        <Link to='/appoinment' className='btn bgGradient text-light'>GET APPOINMENT</Link>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={bannar} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;