import React, { useState } from 'react';
import BookingData from '../../DummyData/BookingData';
import ModalForm from '../ModalForm/ModalForm';

const BookAppoinment = ({ date }) => {
    const [modalState, setModalState] =useState(false)
    const [selectedCategory, setSelectedCategory] =useState('')

    const handleBooking = (category)=>{
            setModalState(true)
            setSelectedCategory(category)
    }
    return (
        <div style={{ marginTop: '150px' }} className="container">
            <h1 className='text-center textColor1 font-weight-bold'>Available Appoinments On {date.toDateString()}</h1>
            <div className="row mt-5">
                {BookingData.map(data =>
                    <div className="col-md-4">
                        <div className="card mb-4 shadow py-3">
                            <div className="card-body text-center">
                                <h3 className='textColor1'>{data.category}</h3>
                                <p className='mb-0 font-weight-bold'>{data.time}</p>
                                <small className='text-secondary'>{data.space}</small><br />
                                <button onClick={() => handleBooking(data.category)} className='btn bgGradient text-light mt-3'>BOOK APPOINMENT</button>
                            </div>
                        </div>
                    </div>
                )}
                    <ModalForm date = {date} modalState={modalState} setModalState={setModalState} bookingTitle={selectedCategory}></ModalForm>
            </div>
        </div>
    );
};

export default BookAppoinment;