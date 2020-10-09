import React from 'react';
import featuredImg from '../../Images/featured.png'

const FeaturedService = () => {
    return (
        <div style={{height:'450px'}} className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img height='450' width='400' src={featuredImg} alt=""/>
                </div>
                <div className="col-md-5">
                    <h1 className='textColor2 mb-4'>Exceptional Dental <br/> Care, On Your Terms.</h1>
                    <p className='text-secondary text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium explicabo quas porro. Aspernatur fugiat hic tenetur ea, quaerat necessitatibus odio quidem natus vero non iusto facilis obcaecati sunt accusamus blanditiis maxime praesentium reprehenderit aperiam commodi modi cupiditate! Optio repellendus odit quia unde quae illo nulla exercitationem omnis quos eaque molestias deserunt alias aut iure, dicta facere nihil aspernatur, maxime blanditiis vel quidem quibusdam. Eveniet iusto error incidunt?
                    </p>
                    <button className='btn bgGradient mt-3'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;