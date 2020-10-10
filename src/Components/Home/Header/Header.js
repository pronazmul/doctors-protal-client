import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Bannar from '../Bannar/Bannar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

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