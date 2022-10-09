import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Gallery, Reviews } from ".";
import { fetchSingleUserEn } from "../../features_en/guest/guestSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { Avatar, Button, Rating } from "@mui/material";
import Carousel from 'react-elastic-carousel';
import details from '../../images/details.png';
import DetailsIcon from '@mui/icons-material/Details';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppBadIcon from '@mui/icons-material/GppBad';


const SingleUser = () => {

  const dispatch = useDispatch();

  let breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 568, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 },
    { width: 1400, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]



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
                  src={single_user.data.user.photo}
                  sx={{ width: 130, height: 130, border: "1px solid blue" }}
                  alt="Avatar"
                />
              </div>
              <h1 className="profile__name--title">
                {single_user.data.user.about_en.name}
              </h1>

              <Link to="#" type="submit" className="blue-btn profile-btn disableButtonColor">
                Message Now
              </Link>
            </div>

            {/* Content */}

            <div className="profile__content">

              <div className="profile__content--details">

                <img src={details} className="details__icon " alt="" />
                <p className="details__text">Its a construction expert providing its services as a <b>{single_user.data.user.service_en.role}</b> in the <b>{single_user.data.user.service_en.category}</b> works .
                </p>

              </div>

              <div className="profile__content--details">

                <DetailsIcon className="details__icon" />
                {single_user.data.user.experience.experience === 0 ?
                  <p className="details__text">
                    It has just started providing its services with a work force of <b>{single_user.data.user.resource.manpower}</b> {single_user.data.user.resource.manpower === 1 ? "employee" : "employees"} .
                  </p> :
                  <p className="details__text">
                    It has been providing its services for around <b>{single_user.data.user.experience.experience}</b> {single_user.data.user.experience.experience === 1 ? "year" : "years"} with a work force of <b>{single_user.data.user.resource.manpower}</b> {single_user.data.user.resource.manpower === 1 ? "employee" : "employees"} .
                  </p>}


              </div>

              <div className="profile__content--details" >

                <NearMeOutlinedIcon className="details__icon" />
                <p className="details__text" >
                  Its service areas in <b>{single_user.data.user.service_en.region}</b> are
                  {
                    single_user.data.user.service_en.city.map((city, index) => {
                      return (
                        <span key={index} className="pipe">
                          <b> {city} </b>
                        </span>
                      )
                    })
                  }.
                </p>

              </div>


              <div className="profile__content--details">

                <CallOutlinedIcon className="details__icon" />
                <p className="details__text">
                  For contact dial <b>{single_user.data.user.contact_en.number}</b> .
                </p>

              </div>


            </div>

            {/* Rating */}
            <div className="profile__rating">
              <h1 className="profile__rating--verification">
                {single_user.data.user.crnVerified ? "Verified" : "Not-Verified"}
                {single_user.data.user.crnVerified ? <VerifiedUserIcon color="success" sx={{ fontSize: "5rem" }} /> : <GppBadIcon color="error" sx={{ fontSize: "5rem" }} />}
              </h1>
              <br />
              <br />
              <Rating precision={0.5} name="read-only" value={single_user.data.user.stars} style={{ fontSize: "2.6rem" }} readOnly />
              <br />
              <br />
              <br />
              <Link
                to={`/Projects/${id}`}
                type="submit"
              >
                <Button className="rating__link" variant="contained" >Projects Completed
                </Button>
              </Link>

            </div>
          </div>
        </div>

        <div className="section__white">
          <h3 className="section__title">About</h3>
          <div className="about">
            <div className="about__div">
              <h3>Company Vision</h3>
              <p>{single_user.data.user.about_en.vision}</p>
            </div>
          </div>
        </div>

        {single_user.data.user.portfolio.length === 0 ? null :
          single_user.data.user.portfolio.find(project => project.review && true) &&
          <div className="section__blue">
            <h3 className="section__title">Client Reviews</h3>
            <Carousel breakPoints={breakPoints}
              showArrows={matchMedia("(min-width: 1000px)").matches ? true : false}
              enableSwipe={matchMedia("(max-width: 1000px)").matches ? true : false}
              pagination={matchMedia("(max-width: 1000px)").matches ? true : false}
            >

              {single_user.data.user.portfolio.map((project, index) => {
                return (
                  <Reviews key={index}
                    review={project.review ? project.review : null}
                    title={project.reviewerTitle ? project.reviewerTitle : null}
                    cname={project.reviewerName ? project.reviewerName : null}
                    pname={project.projectName ? project.projectName : null}
                    rating={project.noOfStars ? project.noOfStars : null}
                    single={project.review ? true : false}>
                  </Reviews>
                )
              })}
            </Carousel>
          </div>
        }

        {single_user.data.user.portfolio.length === 0 ? null :
          <div className="section__white">
            <h3 className="section__title">Projects Gallery</h3>
            {single_user.data.user.portfolio.map((project, index) => {
              return (
                <div key={index}>
                  <div className="project">
                    <h1 className="project-name"><BeenhereOutlinedIcon className="details__icon" style={{ marginRight: "2rem" }} />{project.projectName}</h1>
                  </div>
                  <Gallery data={[
                    ...project.images,
                  ]}></Gallery>
                </div>
              )
            })}
          </div>
        }

      </Wrapper>
    );
  }
  return null;
};

export default SingleUser;

const Wrapper = styled.section`
  .profile {
    padding: 2rem;
    @media only screen and (max-width: 990px) {
      padding: 2rem 0rem;
    }
  }

  .profile__grid {
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
    text-align: center;
    align-items: center;
    @media only screen and (max-width: 990px) {
      grid-template-columns: 1fr;
    }
  }

  .profile__name {
    padding: 1rem;
    border-right: 1px solid #424d83;
    @media only screen and (max-width: 990px) {
      border-right: none;
      margin-bottom: 2rem;
    }
  }

  .profile__name--avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .profile__name--title {
    font-size: 2rem;
    color: var(--clr-black);
    margin-bottom: 1rem;
  }
  
  .profile-btn {
    padding: 0.9rem 2.5rem;
    font-size: 1.7rem;
    margin: 0;
  }

  .profile__content {
    padding: 1rem;
    @media only screen and (max-width: 990px) {
      margin-bottom: 2rem;
    }
  }

  .profile__content--details {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .details__icon {
    height: 4.5rem;
    width: 4.5rem;
    color: blue;
  }

  .details__text {
    font-size: 1.8rem;
    color: var(--clr-black);
    text-align: left;
    margin-left: 2rem;
  }

  .pipe:not(:empty) ~ .pipe:not(:empty):before {
    content: "| ";
  }

  .profile__rating {
    @media only screen and (max-width: 990px) {
      margin-bottom: 2rem;
    }
  }
  .rating__link {
    width: 80%;
    font-size: 2rem;
  }

  .profile__rating--verification {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project{
    width: 100%;
    max-width: 110rem;
    margin: auto;
  }

  .project-name{
    font-size: 2.5rem;
    margin: 3rem 0rem; 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem; 
  }

  .about {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
  }

  .about__div {
    width: 30%;
    text-align: center;
    border: 1px solid #349feb;
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0px 8px 20px 4px rgb(0 0 0 / 6%);
  }

  .about__div h3 {
    font-weight: 700;
    font-size: 2.2rem;
    color: blue;
  }

  .about__div p {
    font-weight: 500;
    font-size: 1.7rem;
    padding-top: 1rem;
  }

  @media only screen and (max-width: 1000px) {
    .about {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .about__div {
      width: 65%;
      margin: 2rem 0rem;
    }

    .about__div h3 {
      font-size: 2rem;
    }
  
    .about__div p {
      font-size: 1.5rem;
      padding-top: 1rem;
    }
  }

  @media only screen and (max-width: 800px) {
    
    .about__div {
      width: 80%;
      margin: 2rem 0rem;
    }
    
  }

  @media only screen and (max-width: 550px) {
    
    .about__div {
      width: 85%;
      margin: 2rem 0rem;
    }
    
  }

  .rec.rec-arrow {
    background-color: #424d83;
    color: white;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }

  .section__white {
    padding: 3rem 2rem;
    @media only screen and (min-width: 990px) {
      padding: 1.5rem;
    }
  }

  .section__title {
    margin-bottom: 3.5rem;
  }

  `;