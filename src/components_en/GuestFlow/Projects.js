import React, { useEffect } from "react";
import { BackToProfile, Table } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { fetchProjectsEn } from "../../features_en/guest/guestSlice";
import styled from "styled-components";


const Projects = () => {

  const dispatch = useDispatch();
  const { projects, isLoading, } = useSelector(
    (state) => state.guestEn
  );

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProjectsEn({ id }));
    // eslint-disable-next-line
  }, [id]);

  if (isLoading) {
    return (
      <div className="section-100vh">
        <Spinner />;
      </div>
    );
  }

  if (projects.data) {
    return (
      <Wrapper>
        <BackToProfile
          avatar={projects.data.projects.photo}
          name={projects.data.projects.about_en.name}
          role={projects.data.projects.service_en.role}
          userId={projects.data.projects._id}
        ></BackToProfile>

        {projects.data.projects.portfolio.length === 0 ?
          <Table 
          message="No Projects Are Added" 
          title="Projects Completed"
          flag={null}
          ></Table>
          :
          <Table
            data={projects.data.projects.portfolio}
            title="Projects Completed"
            flag="projects"
            userId={projects.data.projects._id}
          ></Table>
        }

      </Wrapper>
    );
  }
  return null;
};
export default Projects;

const Wrapper = styled.div`

  padding: 0rem 2rem;

`;