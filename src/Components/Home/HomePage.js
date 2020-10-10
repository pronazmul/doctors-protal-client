import React from 'react';
import Appoinment from './Appoinment/Appoinment';
import Blog from './Blog/Blog';
import Contract from './Contract/Contract';
import Doctors from './Doctors/Doctors';
import FeaturedService from './FeaturedService/FeaturedService';
import Header from './Header/Header';
import Service from './Service/Service';
import Testimonial from './Testimonial/Testimonial';
import Footer from '../Shared/Footer/Footer'

const HomePage = () => {
    document.title="HOME | DOCTORS-PORTAL"
    return (
        <>
            <Header></Header>
            <Service></Service>
            <FeaturedService></FeaturedService>
            <Appoinment></Appoinment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <Contract></Contract>
            <Footer></Footer>
            
        </>
    );
};

export default HomePage;