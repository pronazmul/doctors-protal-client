import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import AppoinmentBannar from './AppoinmentBannar/AppoinmentBannar';

const AppoinmentPage = () => {
    document.title='APPOINMENT'
    const [date, setDate] = useState(new Date())
    console.log(date)
    return (
        <div className='header-bg'>
            <Navbar></Navbar>
            <AppoinmentBannar date ={date} setDate={setDate}></AppoinmentBannar>
            <Footer></Footer>
        </div>
    );
};

export default AppoinmentPage;