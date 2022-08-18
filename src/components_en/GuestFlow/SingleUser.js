import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Gallery, Reviews } from ".";
import { fetchSingleUserEn } from "../../features_en/guest/guestSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { Avatar, Rating } from "@mui/material";

const SingleUser = () => {
  const dispatch = useDispatch();
  const { single_user, isLoading, } = useSelector(
    (state) => state.guestEn
  );

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchSingleUserEn({ id }));
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
  }
  if (single_user.data) {
    return (
      <Wrapper>
        <div className="profile">
          <div className="profile__grid">
            {/* Name */}
            <div className="profile__name">
              <div className="profile__name--avatar">
                <Avatar
                  src={single_user.data.user.profilePhoto}
                  sx={{ width: 130, height: 130 }}
                  alt="Avatar"
                />
              </div>
              <h1 className="profile__name--title">
                {single_user.data.user.employmentHistory_en.companyName}
              </h1>
              <p className="profile__name--subtitle">
                {single_user.data.user.employmentHistory_en.vision}
              </p>

              <p className="profile__name--subtitle">
                {single_user.data.user.user.role_en}
              </p>

              <Link to="#" type="submit" className="blue-btn profile-btn disableButtonColor">
                Message Now
              </Link>
            </div>

            {/* Content */}
            <div className="profile__content">
              <h2 className="profile__content--title">Company Name:<span className="profile__content--text">
                {single_user.data.user.employmentHistory_en.companyName}
              </span></h2>


              <h2 className="profile__content--title">Location:<span className="profile__content--text">
                {single_user.data.user.location_en.country},&nbsp;
                {
                  single_user.data.user.location_en.city.map((city, index) => {
                    return (
                      <small key={index}>
                        {city}
                      </small>
                    )
                  })
                }
              </span></h2>

              <h2 className="profile__content--title">Contact Number:<span className="profile__content--text">
                {single_user.data.user.phoneNumber}
              </span></h2>
              <h2 className="profile__content--title">Projects Completed:<span className="profile__content--text">{single_user.data.noOfProjects}</span>
              </h2>
              <Link
                to={`/Projects/${id}`}
                type="submit"
                className="blue-btn profile-btn"
              >
                View Projects Details
              </Link>
            </div>
            {/* Rating */}
            <div className="profile__rating">
              <h2 className="profile__content--title">Rating</h2>
              <Rating precision={0.5} name="read-only" value={single_user.data.user.stars} style={{ fontSize: "2.6rem" }} readOnly />
            </div>
          </div>
        </div>

        <div className="section__blue">
          <h3 className="section__title">Client Reviews</h3>
          {single_user.data.user.portfolio.map((project, index) => {
            return (
              <Reviews key={index}
                review={project.review ? project.review : null}
                title={project.reviewerTitle ? project.reviewerTitle : null}
                rating={project.noOfStars ? project.noOfStars : null}
                single={true}>
              </Reviews>
            )
          })}
        </div>

        <div className="section__white">
          <h3 className="section__title">Projects Gallery</h3>
          {single_user.data.user.portfolio.map((project, index) => {
            return (
              <div key={index}>
                <div className="parent">
                  <h1 className="project-name">{project.projectName}</h1>
                </div>
                <Gallery data={[
                  ...project.images,
                ]}></Gallery>
              </div>
            )
          })}
        </div>
      </Wrapper>
    );
  }
  return null;
};

export default SingleUser;

const Wrapper = styled.section`
  .profile {
    padding: 6rem;
    @media only screen and (max-width: 990px) {
      padding: 0rem;

    }
  }
  .profile__grid {
    max-width: 120rem;
    margin: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
    text-align: center;
    align-items: center;
    @media only screen and (max-width: 990px) {
      grid-template-columns: 1fr;
      grid-gap: 3rem;
    }
  }
  .profile__name {
    /* border-right: 1px solid #424d83; */
    @media only screen and (max-width: 800px) {
      border-right: none;
    }
  }
  .profile__name--avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .profile__name--title {
    font-size: 2.3rem;
    color: var(--clr-black);
    margin-bottom: 1.2rem;
  }
  .profile__name--subtitle {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--clr-black);
    margin-bottom: 3rem;
    @media only screen and (max-width: 990px) {
      margin-bottom: 3.5rem;
    }
  }
  .profile-btn {
    padding: 0.9rem 2.5rem;
    font-size: 1.7rem;
    margin: 0;
  }
  .profile__content {
    text-align: left;
    padding-top: 1.5rem;
    padding-bottom: 0.26rem;
    padding-left: 25%;
    @media only screen and (max-width: 990px) {
      padding: 2rem 5rem;
    }
    @media only screen and (max-width: 500px) {
      padding-left: 2rem;
    }
    @media only screen and (max-width: 350px) {
      padding-left: 1.5rem;
    }
  }
  .profile__content--title {
    font-size: 2rem;
    color: var(--clr-black);
    margin-bottom: 2.5rem;
    @media only screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      
    }
  }

  .profile__content--title small {
    border-right: 1px solid black;
    padding-right: 5px;
    margin-right: 5px;
  }

  .profile__content--title small:last-child {
    border-right: none;
  }

  .profile__content--text {
    font-size: 2rem;
    font-weight: 500;
    color: var(--clr-black);
    margin-left: 1.5rem;
    @media only screen and (max-width: 500px) {
      margin-left: 0rem;
    }
  }  
  .profile__rating > p {
    color: yellow;
    font-size: 2.3rem;
  }
  .profile__rating {
    margin-bottom: 50%;
    padding-left: 20%;
    text-align: left;
    @media only screen and (max-width: 990px) {
      padding: 0rem 3rem;
      margin-bottom: 5%;
    }
  }
  .parent{
    width: 100%;
    max-width: 110rem;
    margin: auto;
  }
  .project-name{
    font-size: 2.5rem;
    margin: 3rem 0rem; 
  }
  `;