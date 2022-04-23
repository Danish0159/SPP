import React, { useEffect } from "react";
import styled from "styled-components";
import { Reviews, Gallery, BackToProfile } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { fetchSingleProject, reset } from "../../slices/users";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const SingleProject = () => {
  const dispatch = useDispatch();
  const { single_project, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.users);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, message, dispatch]);

  const { userId, id } = useParams();
  console.log(userId);
  console.log(id);

  useEffect(() => {
    dispatch(fetchSingleProject({ userId, id }));
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
        <BackToProfile></BackToProfile>
        <div className="project">
          <h1 className="project__title">Project Detail</h1>

          <h1 className="project__name">
            {single_project.data.portfolio[0].projectName}
          </h1>
          <h1 className="project__location">
            {single_project.data.portfolio[0].location}
          </h1>
        </div>

        <div className="section__blue">
          <h3 className="section__title">Project Gallery</h3>
          <Gallery data={single_project.data.portfolio[0].images}></Gallery>
        </div>

        <div className="section__white">
          <h3 className="section__title">Client Review</h3>
          <Reviews></Reviews>
        </div>
      </Wrapper>
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
    color: var(--clr-blue-2);
  }
  .project__name,
  .project__location {
    font-size: 2rem;
    margin-left: 2rem;
    margin: 1.3rem;
  }
`;
