import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Reviews, Gallery } from ".";
import { fetchSingleUser, reset } from "../../slices/users";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { Avatar, Rating } from "@mui/material";
import { useTranslation } from "react-i18next";

const SingleUser = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { single_user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, message, dispatch]);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleUser(id));
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
                {single_user.data.user.user.name}
              </h1>
              <p className="profile__name-subtitle">
                {" "}
                {single_user.data.user.user.role}
              </p>
              <Link to="#" type="submit" className="blue-btn profile-btn">
                {t("UserMessage")}
              </Link>
            </div>

            {/* Content */}
            <div className="profile__content">
              <h2 className="profile__content--title">{t("UserLocation")}</h2>
              <p className="profile__content--location">
                {single_user.data.user.location.country},{" "}
                {single_user.data.user.location.city}
              </p>
              <h2 className="profile__content--title">{t("UserNumber")}</h2>
              <p className="profile__content--number">
                <a href={"tel:" + single_user.data.user.phoneNumber}>
                  {single_user.data.user.phoneNumber}
                </a>
              </p>
              <h2 className="profile__content--title mb">
                {t("UserTotalProjects")} {single_user.data.noOfProjects}
              </h2>
              <Link
                to={`/Projects/${id}`}
                type="submit"
                className="blue-btn profile-btn"
              >
                {t("UserViewDetails")}
              </Link>
            </div>
            {/* Rating */}
            <div className="profile__rating">
              <h2 className="profile__content--title">{t("UserRating")}</h2>
              <Rating name="read-only" value={4} readOnly />
            </div>
          </div>
        </div>

        <div className="section__blue">
          <h3 className="section__title">{t("UserReviews")}</h3>
          <Reviews single={false}></Reviews>
        </div>

        <div className="section__white">
          <h3 className="section__title">{t("UserGallery")}</h3>

          {single_user.data.user.portfolio.map((project, index) => {
            return (
              <>
                <div key={index} className="parent">
                  {/* project.name */}
                  <h1 className="project-name">{project.projectName}</h1>
                </div>
                <Gallery data={[
                  ...project.images,
                ]}></Gallery>
              </>
            )
          })}

          {/* <h1 className="project-name">Name</h1>
          <Gallery data={[
            // ...single_user.data.user.portfolio[0]?.images,
            ...single_user.data.user.portfolio[1]?.images,
            // ...single_user.data.user.portfolio[2]?.images,
            // ...single_user.data.user.portfolio[3]?.images,
            // ...single_user.data.user.portfolio[4]?.images,
          ]}></Gallery>
          */}
        </div>
      </Wrapper>
    );
  }
  return null;
};

export default SingleUser;

const Wrapper = styled.section`
  .profile {
    padding: 6rem 0rem;
    @media only screen and (max-width: 800px) {
      padding-bottom: 0rem;
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
  /* Profie Name */
  /* /////////////// */
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

  .profile__name-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--clr-black);
    margin-bottom: 3.2rem;
    @media only screen and (max-width: 800px) {
      margin-bottom: 4rem;
    }
  }

  .profile-btn {
    padding: 0.9rem 2.5rem;
    font-size: 1.7rem;
    margin: 0;
  }

  /* /////////////// */
  /* Profie Content */
  .profile__content {
    text-align: left;
    padding-top: 1.5rem;
    padding-right: 2%;
    padding-bottom: 0.26rem;
    padding-left: 20%;
    @media only screen and (max-width: 800px) {
      padding: 2rem 3rem;
    }
  }
  .profile__content--title {
    font-size: 2rem;
    color: var(--clr-black);
    margin-bottom: 1.2rem;
  }
  .profile__content--location {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--clr-black);
    margin-bottom: 2.2rem;
  }
  .profile__content--number {
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--clr-black);
    margin-bottom: 5.2rem;
  }
  .mb {
    margin-bottom: 2rem;
  }
  .profile__rating > p {
    color: yellow;
    font-size: 2.3rem;
  }
  .profile__rating {
    margin-bottom: 70%;
    padding-left: 20%;
    text-align: left;
    @media only screen and (max-width: 800px) {
      padding: 0rem 3rem;
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