import { TextField } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import logo from '../../../images/logo3.png'
import { Review } from '../../../components/Common/styled'
import { styles } from '../../../styles'

const ClientReview = () => {
    return (
        <Review>
            <Wrapper>
                <div className="review">
                    <div className="review__left">
                        <img className="review__left--logo" src={logo} alt="Logo" />
                        <div className="review__left--content">
                            <p className='review__left--text'>A community of where you can find contractors, designers and companies. A way to Learn and Excel your Skills.
                            </p>
                        </div>
                    </div>
                    <div className="review__right">
                        <div className="form">
                            <h1 className='form__title'>Help Jhon with a testimonial</h1>
                            <form>
                                <p className="card__subtitle">Enter your testimonial</p>
                                <TextField
                                    fullWidth
                                    type="text"
                                    name="text"
                                    inputProps={{
                                        style: styles.desciption,
                                    }}
                                    rows={4}
                                    multiline
                                    value="SomeContent"
                                    // value={clientMessage}
                                    // onChange={(e) => setClientMessage(e.target.value)}
                                    required
                                />
                                <button
                                    style={{ marginTop: '2rem' }}
                                    className="blue-btn card-btn"
                                    type="submit"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Review>
    )
}

export default ClientReview

const Wrapper = styled.div`
    .review {
      display: flex;
      min-height: 100vh;
    }
    @media only screen and (max-width:850px) {
    .review {
        flex-direction: column;
    }
    }
    .review__left {
     background-color: #424d83;
     flex: 0 0 32%;
     padding: 2.2rem 4rem;
     @media only screen and (max-width: 850px) {
         padding: 2rem;
     }
    }
    .review__left--logo {
       height: 6rem;
       @media only screen and (max-width: 850px) {
       height: 4.2rem;
    }
    }
    .review__left--text{
        margin-top: 2rem;
        font-size: 1.5rem;
        color: white;
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
    .form{
        background-color:white;
        font-size: 2rem;
        padding: 2rem 2rem;
        border-radius:.5rem;
        max-width: 60%;
        width:100%;
        @media only screen and (max-width: 1200px) {
            max-width: 90%;
            padding: 2rem;
     }
    }
    .form__title{
        font-size: 2.7rem;
        @media only screen and (max-width: 1200px) {
         font-size: 2.2rem;
     }
    }
`;