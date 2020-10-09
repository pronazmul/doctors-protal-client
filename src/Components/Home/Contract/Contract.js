import React from 'react'

const Contract = () => {
    return (
        <div className="container-fluid text-center contract-bg py-5">
        <h5 className='textColor1 font-weight-bolder'>CONTRACT US</h5>
        <h1 className='text-light font-weight-bolder'>Awlays Connect With Us</h1>
            <div className="col-md-6 mx-auto mt-5">
                    <input className='form-control mt-3 rounded' type="text" placeholder='Email Address *'/>
                    <input className='form-control mt-3 rounded' type="text" placeholder='Subject *'/>
                    <textarea className="form-control mt-3 rounded" placeholder='Your Message *' id="" rows="3"></textarea>
                    <button className='btn bgGradient mt-4 px-5'>SUBMIT</button>
            </div>
        </div>
    );
};

export default Contract;