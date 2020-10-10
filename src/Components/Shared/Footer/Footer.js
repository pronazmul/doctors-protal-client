import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="container-fluid footer-bg">
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-md-3">
                        <h4 className='textColor1 font-weight-bold ml-3'>Emergency</h4>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emargency Dental</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Cheeck Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Personal Deasies Treatment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Tooth Extraction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emergency Cheeck Up </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4 className='textColor1 font-weight-bold ml-3'>Services</h4>
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emargency Dental</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Cheeck Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Personal Deasies Treatment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Tooth Extraction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emergency Cheeck Up </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h4 className='textColor1 font-weight-bold ml-3'>Oral Health</h4>
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emargency Dental</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Cheeck Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Personal Deasies Treatment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Tooth Extraction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Emergency Cheeck Up </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h3 className='textColor1 font-weight-bold ml-3'>Our Address</h3>
                        <ul className="nav flex-column ">
                            <li className="nav-item">
                                <Link className="nav-link text-secondary mt-2" to="#">Fulbaria, Mymensingh, Dhaka</Link>
                            </li>
                        </ul>
                        <div className="btn-group py-3 ml-3">
                            <button type="button" className="btn bgGradient rounded rounded-circle mr-2 text-light"><FontAwesomeIcon  style={{fontSize:'20px'}} icon={faFacebook}></FontAwesomeIcon></button>
                            <button type="button" className="btn bgGradient rounded rounded-circle mr-2 text-light"><FontAwesomeIcon  style={{fontSize:'20px'}} icon={faGooglePlus}></FontAwesomeIcon></button>
                            <button type="button" className="btn bgGradient rounded rounded-circle text-light"><FontAwesomeIcon  style={{fontSize:'20px'}} icon={faTwitter}></FontAwesomeIcon></button>
                        </div>
                        <p className='text-secondary ml-3 mt-5'>Call Now</p>
                        <button className='btn bgGradient text-light ml-3'>+880 1746243302</button>
                    </div>
                </div>
            </div>
            <p className='text-secondary small text-center mt-5'>Copyright 2020 All Right Reserved || Pro Nazmul</p>
        </div>
    );
};

export default Footer;