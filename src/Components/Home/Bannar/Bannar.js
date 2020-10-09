import React from 'react'
import bannar from '../../Images/bannar.png'

const Bannar = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <h1>Your New Smile <br/> Starts Here</h1>
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