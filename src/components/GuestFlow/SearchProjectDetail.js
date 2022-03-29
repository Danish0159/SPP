import React, { useEffect } from "react";
import styled from "styled-components";
import { Reviews, Gallery, BackToProfile } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { fetchSingleProject, reset } from "../../slices/users";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const SearchProjectDetail = () => {
  const dispatch = useDispatch();
  const { single_project, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.users);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isError, isSuccess, message, dispatch]);

  const { userId, id } = useParams();
  console.log(userId);
  console.log(id);

  useEffect(() => {
    dispatch(fetchSingleProject({ userId, id }));
  }, [id]);

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
  }
  console.log(single_project.data);
  return (
    <Wrapper>
      <BackToProfile></BackToProfile>
      <div className="project">
        {single_project.data && (
          <h1>{single_project.data.portfolio[0].projectName}</h1>
        )}
        <h1>ProjectLocation</h1>
      </div>

      <div className="section__blue">
        <h3 className="section__title">Project Gallery</h3>
        <Gallery></Gallery>
        {/* <Link to="/Gallery" type="submit" className="blue-btn project__btn">
          See More
        </Link> */}
      </div>

      <div className="section__white">
        <h3 className="section__title">Client Review</h3>
        <Reviews></Reviews>
      </div>
    </Wrapper>
  );
};

export default SearchProjectDetail;
const Wrapper = styled.section`
  .project {
    text-align: center;
    background-color: skyblue;
    padding: 10rem 0rem;
  }
  .project__btn {
    display: block;
    width: 200px;
  }
`;
