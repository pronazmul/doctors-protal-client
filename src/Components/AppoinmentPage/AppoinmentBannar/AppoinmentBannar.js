import React from 'react';
import bannar from '../../Images/bannar.png'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const AppoinmentBannar = ({date,setDate}) => {
    return (
        <div style={{marginBottom:'100px'}} className="container-fluid">
            <div className="container">
                <div style={{ height: '430px' }} className="row d-flex align-items-center">
                    <div className="col-md-5 mt-2 mr-4 ">
                        <h1 className='font-weight-bolder textColor1 mb-3'>Appoinment</h1>
                        <DatePickerCalendar date={date} onDateChange={setDate}/>
                    </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={bannar} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default AppoinmentBannar;