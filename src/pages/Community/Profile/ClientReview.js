import React, { useEffect } from 'react';
import styled from "styled-components";
import logo from '../../../images/logo3.png'
import { fetchSingleProject, reset } from '../../../slices/users';
import { toast } from 'react-toastify';
import Spinner from '../../../components/Spinner';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Gallery } from '../../../components/GuestFlow';
import ReviewForm from '../../../components/Community/Profile/ReviewForm';

const ClientReview = () => {
    // State.
    const { single_project, isLoading, isError, isSuccess, message } =
        useSelector((state) => state.users);
    const dispatch = useDispatch();
    const { userId, id } = useParams();

    useEffect(() => {
        dispatch(fetchSingleProject({ userId, id }));
    }, [id]);

    useEffect(() => {
        if (isError) {
            toast.error(message);
            dispatch(reset());
        }
        if (isSuccess) {
            dispatch(reset());
        }
    }, [isError, isSuccess, message, dispatch]);

    if (isLoading) {
        return (
            <div className="section-100vh">
                <Spinner />;
            </div>
        );
    }

    if (single_project.data) {
        return (
            <Wrapper>
                <div className="review">
                    <div className="review__left">
                        <Link to="/">
                            <img className="review__left--logo" src={logo} alt="Logo" />
                        </Link>
                        <div className="review__left--content">
                            <p className='review__left--text'>A community of where you can find contractors, designers and companies. A way to Learn and Excel your Skills.
                            </p>
                        </div>
                    </div>
                    <div className="review__right">
                        <div className="form">
                            <h1 className='section__title'>Project Details</h1>
                            <div className="project">

                                <p className="project__subtitle">Project Name: <span className="project__name">{single_project.data.portfolio[0].projectName}
                                </span>
                                </p>
                                <p className="project__subtitle">Project Location: <span className="project__location">{single_project.data.portfolio[0].location}
                                </span>
                                </p>
                                <p className="project__subtitle">Project Description: <span className="project__description">{single_project.data.portfolio[0].description ? single_project.data.portfolio[0].description : null}
                                </span></p>
                                <p className="project__subtitle">Project Gallery: <span className="project__gallery">
                                </span></p>
                                <Gallery data={single_project.data.portfolio[0].images}></Gallery>
                            </div>
                            <ReviewForm User={single_project.data.user.name} userId={userId} id={id}></ReviewForm>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
    else {
        return null;
    }
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
     display: flex;
     flex-direction:column;
     align-items:center;
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
        text-align:center;
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
        max-width: 70%;
        width:100%;
        margin: 3rem 0rem;
        @media only screen and (max-width: 1200px) {
            max-width: 90%;
            padding: 2rem;
     }
    }
    .project__subtitle{
        font-size: 1.8rem;
        margin: 1.4rem 0rem;
    }
`;