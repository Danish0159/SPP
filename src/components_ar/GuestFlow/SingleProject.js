import React, { useEffect } from "react";
import styled from "styled-components";
import { Reviews, Gallery, BackToProfile } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { fetchSingleProjectAr } from "../../features_ar/guest/guestSlice";
import { Rating } from "@mui/material";

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
          <h1 className="project__title">تفاصيل المشروع</h1>

          <p className="project__subtitle">اسم المشروع: <span className="project__name">{single_project.data.portfolio[0].projectName}
          </span>
          </p>
          <p className="project__subtitle">موقع المشروع: <span className="project__location">{single_project.data.portfolio[0].projectLocation}
          </span>
          </p>
          {single_project.data.portfolio[0].projectDescription && <p className="project__subtitle">وصف المشروع: <span className="project__description">{single_project.data.portfolio[0].projectDescription}</span></p>}
          
          {single_project.data.portfolio[0].noOfStars > 0 && <p className="project__subtitle">تقييم المشروع: <span className="project__description"><Rating sx={{direction: "ltr"}} precision={0.5} name="read-only" value={single_project.data.portfolio[0].noOfStars} style={{ fontSize: "1.9rem" }} readOnly />
          </span></p>}
        </div>

        <div className="section__blue">
          <h3 className="section__title">معرض المشروع</h3>
          <Gallery data={single_project.data.portfolio[0].images}></Gallery>
        </div>

        <div className="section__white">
          <h3 className="section__title">مراجعة العميل</h3>
          <Reviews 
          review={single_project.data.portfolio[0].review ? single_project.data.portfolio[0].review : null} 
          title={single_project.data.portfolio[0].reviewerTitle ? single_project.data.portfolio[0].reviewerTitle : null} 
          rating={single_project.data.portfolio[0].noOfStars ? single_project.data.portfolio[0].noOfStars : null}
          single={single_project.data.portfolio[0].review ? true : false}>
          </Reviews>
        </div>
      </Wrapper >
    );
  }
  return null;
};

export default SingleProject;
const Wrapper = styled.section`
  .project {
    max-width: 105rem;
    margin: auto;
    width: 100%;
    padding: 3rem 0rem;
  }
  .project__title {
    font-size: 3rem;
    margin-bottom:2.5rem;
    margin-right: 2rem;
    color: var(--clr-blue-2);
  }
  .project__subtitle{
    font-size: 2rem;
    color: var(--clr-black);
    margin-bottom: 2.2rem;
    margin-right: 2rem;
    font-weight: 700;
    }
    .project__name,
    .project__location,
    .project__description,
    .project__stars {
      font-size: 2rem;
      margin: 1.3rem 0rem;
      margin-right: 1.5rem;
      font-weight: 500;
    }
`;