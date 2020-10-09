import React from 'react'
import doctor1 from '../../Images/doctor1.png'
import doctor2 from '../../Images/doctor2.jpg'
import doctor3 from '../../Images/doctor.png'

const Doctors = () => {
    const doctorInfo = [
        {
            image:doctor1,
            name:'Dr. Rashadul Alam',
            cell:'+880 1746 243303'
        },
        {
            image:doctor2,
            name:'Dr. Ema Roy',
            cell:'+880 1746 243303'
        },
        {
            image:doctor3,
            name:'Dr. A A Maqsus',
            cell:'+880 1746 243303'
        },
    ]
    return (
        <div className="container text-center spacer">
        <h2 className='textColor1 font-weight-bolder'>OUR DOCTORS</h2>
            <div className="row mt-5">
                {doctorInfo.map(data=>
                        <div key={data.name} className="col-md-4">
                            <div className="card border-0 mt-3 shadow">
                                <div className="card-body py-5">
                                    <img className='rounded rounded-circle img-thumbnail' height='100' width='100' src={data.image} alt=""/>
                                    <h4 className='textColor1 font-weight-bold mt-4'>{data.name}</h4>
                                    <p className='text-secondary'>{data.cell}</p>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Doctors;