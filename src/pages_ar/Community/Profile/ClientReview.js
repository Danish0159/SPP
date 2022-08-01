import React, { useEffect } from 'react';
import styled from "styled-components";
import logo from '../../../images/logo3.png'
import Spinner from '../../../components_ar/Spinner';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Gallery } from '../../../components_ar/GuestFlow';
import ReviewForm from '../../../components_ar/Community/Profile/ReviewForm';
import { fetchSingleProjectEn } from '../../../features/guest/guestSlice';

const ClientReview = () => {
    // State.
    const { single_project, isLoading, } = useSelector((state) => state.guest);
    const dispatch = useDispatch();
    const { userId, id } = useParams();

    useEffect(() => {
        dispatch(fetchSingleProjectEn({ userId, id }));
        // eslint-disable-next-line
    }, [id]);

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
                        <Link to="/ar">
                            <img className="review__left--logo" src={logo} alt="Logo" />
                        </Link>
                        <div className="review__left--content">
                            <p className='review__left--text'>مجتمع حيث يمكنك العثور على المقاولين والمصممين والشركات. طريقة لتعلم وإتقان مهاراتك.
                            </p>
                        </div>
                    </div>
                    <div className="review__right">
                        <div className="form">
                            <h1 className='section__title'>تفاصيل المشروع</h1>
                            <div className="project">

                                <p className="project__subtitle">اسم المشروع: <span className="project__name">{single_project.data.portfolio[0].projectName}
                                </span>
                                </p>
                                <p className="project__subtitle">موقع المشروع: <span className="project__location">{single_project.data.portfolio[0].location}
                                </span>
                                </p>
                                <p className="project__subtitle">وصف المشروع: <span className="project__description">{single_project.data.portfolio[0].description ? single_project.data.portfolio[0].description : null}
                                </span></p>
                                <p className="project__subtitle">معرض المشروع: <span className="project__gallery">
                                </span></p>
                                <Gallery data={single_project.data.portfolio[0].images}></Gallery>
                            </div>
                            <ReviewForm User={single_project.data.user.name_ar} userId={userId} id={id}></ReviewForm>
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
     position: sticky;
     top: 0;
     z-index: 1;
     background-color: #424d83;
     height: 100vh;
     flex: 0 0 32%;
     padding: 2.2rem 4rem;
     display: flex;
     flex-direction:column;
     align-items:center;
     justify-content:center;
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
        font-size: 2rem;
        color: var(--clr-black);
        margin-bottom: 2.2rem;
        margin-left: 2rem;
        font-weight: 700;
        }
      .project__name,
      .project__location,
      .project__description {
        font-size: 2rem;
        margin: 1.3rem 0rem;
        margin-left: 2rem;
        font-weight: 500;
      }
`;