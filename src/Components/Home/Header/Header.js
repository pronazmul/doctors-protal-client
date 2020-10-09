import React from 'react';
import Bannar from '../Bannar/Bannar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='header-bg'>
            <Navbar></Navbar>
            <Bannar></Bannar>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;