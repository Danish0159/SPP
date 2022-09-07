import React, { useEffect } from "react";
import { BackToProfile, Table } from "../GuestFlow";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner";
import { fetchProjectsAr } from "../../features_ar/guest/guestSlice";
import styled from "styled-components";

const Projects = () => {
  const dispatch = useDispatch();
  const { projects, isLoading, } = useSelector(
    (state) => state.guestAr
  );

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProjectsAr({ id }));
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
          avatar={projects.data.projects.profilePhoto}
          name={projects.data.projects.about_ar.companyName}
          role={projects.data.projects.user.role_ar}
          userId={projects.data.projects._id}
        ></BackToProfile>

        {projects.data.projects.portfolio.length === 0 ?
          <Table 
          message="لم تتم إضافة أي مشاريع" 
          title="المشاريع المنجزة"
          flag={null}
          ></Table>
          :
          <Table
            data={projects.data.projects.portfolio}
            title="المشاريع المنجزة"
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