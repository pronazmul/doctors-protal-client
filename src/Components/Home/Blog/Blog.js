import React from 'react'
import ema from '../../Images/ema.png'
import john from '../../Images/Ellipse 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
    const blogData = [
        {
            image: ema,
            name: 'Dr. Ema Roy',
            time: '23 April 2020',
            title: 'Two Times Of Brush A Day Keep Teeth Helthay',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem perspiciatis veritatis ipsum molestiae recusandae?'
        },
        {
            image: john,
            name: 'Dr. Jhon Mikel',
            time: '18 June 2020',
            title: 'The Tooth Cancer Is Taking a Challenge',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem perspiciatis veritatis ipsum molestiae recusandae?'
        }
    ]
    return (
        <div className="container text-center spacer">
            <h5 className='textColor1 font-weight-bolder'>OUR BLOG</h5>
            <h1 className='textColor2 font-weight-bolder'>From Our Blog News</h1>
            <div className="row mt-5">

                <div className="col-md-4">
                    <div className="card border-0 mt-3 shadow card-bg btn">
                        <div className="card-body text-light text-left px-3 py-3">
                                <p className='font-weight-bold m-0'>Rashed Kabir</p>
                                <p className=' m-0'>22 August 2012</p>

                                <h4 className=' font-weight-bold my-5'>Check At Least A Doctor In a Yer For Your Teeth</h4>
                            
                                <FontAwesomeIcon className=' display-4' icon={faArrowRight}></FontAwesomeIcon>
                            
                        </div>
                    </div>
                </div>

                {blogData.map(data =>
                    <div key={data.name} className="col-md-4">
                        <div className="card shadow py-4 border-0 mt-3">
                            <div className="card-header p-0 border-0 bg-white d-flex">
                                <div className="col-md-3">
                                    <img height='40' src={data.image} alt="" />
                                </div>
                                <div className="col-md-9">
                                    <p className='textColor1 font-weight-bold m-0'>{data.name}</p>
                                    <p className='textColor2 m-0'>{data.time}</p>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className='textColor2 font-weight-bold my-2'>{data.title}</h4>
                            </div>
                            <div className="card-footer border-0 bg-white">
                                <p className='text-secondary'>{data.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;