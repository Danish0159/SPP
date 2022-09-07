import React, { useEffect } from "react";
import styled from "styled-components";
import { Reviews, Gallery, BackToProfile } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { fetchSingleProjectAr } from "../../features_ar/guest/guestSlice";
import { Rating } from "@mui/material";
import Carousel from 'react-elastic-carousel';

const SingleProject = () => {
  const dispatch = useDispatch();
  const { single_project, isLoading, } = useSelector((state) => state.guestAr);

  const { userId, id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleProjectAr({ userId, id }));
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
        <BackToProfile
          avatar={single_project.data.profilePhoto}
          name={single_project.data.about_ar.companyName}
          role={single_project.data.user.role_ar}
          userId={userId}
        ></BackToProfile>

        <div className="project">
          <div className="project__details">
            <h1 className="project__title">تفاصيل المشروع</h1>

            <p className="project__subtitle">اسم المشروع: <span className="project__name">{single_project.data.portfolio[0].projectName}
            </span>
            </p>
            <p className="project__subtitle">موقع المشروع: <span className="project__location">{single_project.data.portfolio[0].projectLocation}
            </span>
            </p>
            {single_project.data.portfolio[0].description && <p className="project__subtitle">وصف المشروع: <span className="project__description">{single_project.data.portfolio[0].projectDescription}</span></p>}

            {single_project.data.portfolio[0].noOfStars > 0 && <p className="project__subtitle">تقييم المشروع: <span className="project__description"><Rating precision={0.5} name="read-only" value={single_project.data.portfolio[0].noOfStars} style={{ fontSize: "1.9rem", direction: "ltr" }} readOnly />
            </span></p>}
          </div>

          {
            single_project.data.portfolio[0].review &&
            <div className="review__top">
              <h1 className="review__cname">{single_project.data.portfolio[0].reviewerName ? single_project.data.portfolio[0].reviewerName : null}</h1>
              <h2 className="review__title">({single_project.data.portfolio[0].reviewerTitle ? single_project.data.portfolio[0].reviewerTitle : null})</h2>

              <p className="review__paragraph">
                {single_project.data.portfolio[0].review ? single_project.data.portfolio[0].review : null}
              </p>
              <div align="center">
                <Rating precision={0.5} name="read-only" value={single_project.data.portfolio[0].noOfStars ? single_project.data.portfolio[0].noOfStars : null} className="review__rating" style={{ direction: "ltr" }} />
              </div>
              <p className="review__pname">
                {single_project.data.portfolio[0].projectName ? single_project.data.portfolio[0].projectName : null}
              </p>
            </div>
          }
        </div>

        <div className="section__blue">
          <h3 className="section__title">معرض المشروع</h3>
          <Gallery data={single_project.data.portfolio[0].images}></Gallery>
        </div>

        {
          single_project.data.portfolio[0].review &&
          <div className="review__bottom">

            <div className="section__white">
              <h3 className="section__title">مراجعة العميل</h3>
              <Carousel showArrows={false} pagination={false} itemPosition="center">
                <Reviews
                  review={single_project.data.portfolio[0].review ? single_project.data.portfolio[0].review : null}
                  title={single_project.data.portfolio[0].reviewerTitle ? single_project.data.portfolio[0].reviewerTitle : null}
                  cname={single_project.data.portfolio[0].reviewerName ? single_project.data.portfolio[0].reviewerName : null}
                  pname={single_project.data.portfolio[0].projectName ? single_project.data.portfolio[0].projectName : null}
                  rating={single_project.data.portfolio[0].noOfStars ? single_project.data.portfolio[0].noOfStars : null}
                  single={single_project.data.portfolio[0].review ? true : false}>
                </Reviews>
              </Carousel>
            </div>
          </div>
        }

      </Wrapper >
    );
  }
  return null;
};

export default SingleProject;

const Wrapper = styled.section`
  .project {
    max-width: 112rem;
    margin: auto;
    width: 100%;
    padding: 3rem 2rem 3rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project__details {
    width: 100%;
  }

  .review__top {
    min-height: 25rem;
    width: 100%;
    padding-left: 1rem;
    border-radius: 20px;
    background-color: white;
    border: 1px solid #349feb;
    box-shadow: 0px 10px 24px 6px rgb(0 0 0 / 6%);
  }
 
  .review__cname {
    font-weight: 700;
    font-size: 2rem;
    color: blue;
    text-align: center;
    width: 100%;
    padding: 1rem;
    padding-bottom: 0rem;
  }

  .review__title {
    font-weight: 600;
    font-size: 1.7rem;
    color: darkblue;
    text-align: center;
    width: 100%;
    padding: 1rem;
    padding-top: 0rem;
  }

  .review__paragraph {
    font-weight: 500;
    font-size: 1.7rem;
    padding-top: 1rem;
    text-align: center;
    width: 100%;
    padding: 1.5rem;
  }

  .review__rating {
    font-size: 2rem;
    padding: 1rem;
    padding-bottom: 0rem;
  }

  .review__pname {
    font-weight: 900;
    font-size: 1.7rem;
    text-align: center;
    width:100%;
    margin-bottom: 1rem;
    padding: 1rem;
    padding-top: 0rem;
  }

  .review__bottom {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    .review__bottom {
      display: block;
    }
    .review__top {
      display: none;  
    }
  }

  .project__title {
    font-size: 3rem;
    margin-bottom:2.5rem;
    margin-left: 2rem;
    color: var(--clr-blue-2);
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
  .project__description,
  .project__stars {
      font-size: 2rem;
      margin: 1.3rem 0rem;
      margin-left: 2rem;
      font-weight: 500;
  }
`;