import React from 'react';
import './newHomePage.css';
import heroImage from '../../images/HeroImage.jpg';

const Hero = () => {

    return (
        <div className="hero">
            <div className='hero-left'>
                <h1 className='left-ulistitem'>Contractor</h1>
                <h1 className='left-ulistitem'>Designer</h1>
                <h1 className='left-ulistitem'>Company</h1>
                <h1 className='left-ulistitem'>Individual</h1>
            </div>

            <div className='hero-right'>
                <div className="right-content">
                    <h2 className="content-title">Everything Is In Your Hands</h2>
                    <p className="content-paragraph">
                        Search the world information including webpages, images,
                        videos and more. Google has many special features to
                        help you find exactly what you use and pay for.
                    </p>
                </div>
                <div className="right-img">
                    <img src={heroImage} alt="hero" />
                </div>
            </div>

        </div>
    );
};

export default Hero;