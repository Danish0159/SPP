import React from 'react'
import styled from "styled-components";
import logo from '../../../images/logo.png'


const ClientReview = () => {
    return (
        <Wrapper>
            <div className="review">
                <div className="review__left">
                    <img className="review__left--logo" src={logo} alt="Logo" />
                    <div className="review__left--content">
                        <p className='text'>Search the world information including webpages, images, videos and more. Google has many special features to help you find exactly what you use and pay for.
                        </p>
                    </div>
                </div>
                <div className="review__right">
                    <div className="form">
                        Help Jhon with a testimonial
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ClientReview

const Wrapper = styled.div`
        .review {
            display: flex;
            min-height: 100vh;
        }

        @media only screen and (max-width: 56.25em) {
            .review {
                flex-direction: column;
            }
        }

        .review__left {
            background-color: #FAFAFA;
            flex: 0 0 32%;
            padding: 1.7rem 3rem;
        }

        @media only screen and (max-width: 56.25em) {
            .review__left {
                /* display: none; */
            }
        }

        .review__left--logo {
            width: 30rem;
        }

        .review__left--content {
            padding: 0rem 1rem;
        }


        @media only screen and (max-width: 56.25em) {
            .review__left--content {
                display: none;
            }
        }


        .review__left--content>* {
            margin: 1.5rem 0rem;
        }

        .review__right {
            background: url(https://res.cloudinary.com/dm1mlee94/image/upload/v1652984141/Img_megrmd.png);
            opacity: 1;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3rem 0rem;
        }
        .text{
            font-size: 1.5rem;
        }
        .form{
            background-color:yellow;
            padding: 12rem 12rem;
            font-size: 2rem;
        }
`;