import React from 'react';
import logo from '../../Images/dental.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <Link class="navbar-brand" href="#">
                        <img height='60' src={logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto font-weight-bolder">
                            <li class="nav-item">
                                <Link class="nav-link textColor1 mr-4" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link textColor1 mr-4" to='/appoinment'>Appoinment</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link textColor1 mr-4" to="#">Dental Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link textColor1 mr-4" to="#">Reviews</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link textColor1 mr-4" to="#">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link textColor1 mr-4" to='/login'>Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;